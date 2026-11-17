const fs = require('fs');

const ISSUE_TITLE = 'Repository status label drift';
const ISSUE_MARKER = '<!-- automated-repo-status -->';
const NON_REPOSITORY_PATHS = new Set([
  'collections',
  'marketplace',
  'orgs',
  'settings',
  'sponsors',
  'topics',
  'users',
]);

function repositoryFromUrl(value) {
  let url;
  try {
    url = new URL(value);
  } catch {
    return null;
  }

  if (!['http:', 'https:'].includes(url.protocol) || !['github.com', 'www.github.com'].includes(url.hostname.toLowerCase())) {
    return null;
  }

  const parts = url.pathname.split('/').filter(Boolean);
  if (parts.length < 2 || NON_REPOSITORY_PATHS.has(parts[0].toLowerCase())) {
    return null;
  }

  const owner = parts[0];
  const name = parts[1].replace(/\.git$/, '');
  if (!owner || !name) {
    return null;
  }

  return {
    owner,
    name,
    key: `${owner}/${name}`.toLowerCase(),
    url: `https://github.com/${owner}/${name}`,
  };
}

function readRepositories() {
  const markdown = fs.readFileSync('README.md', 'utf8');
  const repositories = new Map();
  const githubLink = /\[([^\]]*)\]\((https?:\/\/(?:www\.)?github\.com\/[^\s)]+)\)/gi;
  const entry = /^\s*-\s+(?::([a-z]+):\s+)?\[([^\]]+)\]\(([^\s)]+)(?:\s+["'][^"']*["'])?\)/i;

  for (const line of markdown.split('\n')) {
    for (const match of line.matchAll(githubLink)) {
      const repository = repositoryFromUrl(match[2]);
      if (!repository) {
        continue;
      }
      if (!repositories.has(repository.key)) {
        repositories.set(repository.key, { ...repository, entries: [] });
      }
    }

    const entryMatch = line.match(entry);
    if (!entryMatch) {
      continue;
    }
    const repository = repositoryFromUrl(entryMatch[3]);
    if (!repository) {
      continue;
    }
    if (!repositories.has(repository.key)) {
      repositories.set(repository.key, { ...repository, entries: [] });
    }

    const entries = repositories.get(repository.key).entries;
    const label = entryMatch[1] ? entryMatch[1].toLowerCase() : null;
    if (!entries.some((item) => item.name === entryMatch[2] && item.label === label && item.url === entryMatch[3])) {
      entries.push({ name: entryMatch[2], label, url: entryMatch[3] });
    }
  }

  return [...repositories.values()].sort((left, right) => left.key.localeCompare(right.key));
}

async function fetchMetadata(github, repositories) {
  let nextIndex = 0;
  const worker = async () => {
    while (nextIndex < repositories.length) {
      const repository = repositories[nextIndex++];
      try {
        const { data } = await github.rest.repos.get({
          owner: repository.owner,
          repo: repository.name,
        });
        repository.metadata = {
          fullName: data.full_name,
          url: data.html_url,
          archived: data.archived,
          pushedAt: data.pushed_at,
          createdAt: data.created_at,
          stars: data.stargazers_count,
        };
      } catch (error) {
        repository.error = `${error.status || 'request failed'}: ${error.message}`;
      }
    }
  };

  await Promise.all(Array.from({ length: Math.min(5, repositories.length) }, worker));
}

function oneYearBefore(date) {
  const cutoff = new Date(date);
  cutoff.setUTCFullYear(cutoff.getUTCFullYear() - 1);
  return cutoff;
}

function displayDate(value) {
  return value ? value.slice(0, 10) : 'never';
}

function escapeCell(value) {
  return String(value).replace(/\|/g, '\\|').replace(/[\r\n]+/g, ' ');
}

function suggestedChange(entry, reasons, archived, stale) {
  if (archived) {
    return 'Move to ARCHIVED.md and mark :zzz:.';
  }
  if (stale) {
    return entry.label && !['package', 'zzz'].includes(entry.label)
      ? `Replace :${entry.label}: with :zzz:.`
      : 'Mark :zzz:.';
  }
  if (entry.label === 'star') {
    return 'Remove :star: until the project is mature and has >100 stars.';
  }
  if (entry.label === 'new') {
    return 'Remove :new:.';
  }
  if (entry.label === 'zzz') {
    return 'Remove :zzz: and reassess the entry.';
  }
  return reasons.length ? 'Review the entry label.' : '';
}

function findDrift(repositories, now) {
  const cutoff = oneYearBefore(now);
  const drift = [];

  for (const repository of repositories) {
    if (!repository.metadata) {
      continue;
    }
    const metadata = repository.metadata;
    const pushedAt = metadata.pushedAt ? new Date(metadata.pushedAt) : null;
    const createdAt = metadata.createdAt ? new Date(metadata.createdAt) : null;
    const stale = !pushedAt || pushedAt < cutoff;
    const recent = pushedAt && pushedAt >= cutoff;

    for (const entry of repository.entries) {
      const reasons = [];
      if (metadata.archived) {
        reasons.push('repository is archived but remains in README.md');
      }

      if (entry.label === 'star') {
        if (metadata.stars <= 100) {
          reasons.push(`${metadata.stars} stars; :star: requires >100`);
        }
        if (stale && !metadata.archived) {
          reasons.push(`last push ${displayDate(metadata.pushedAt)} is over 12 months old`);
        }
      } else if (entry.label === 'new') {
        if (createdAt && createdAt <= cutoff) {
          reasons.push(`created ${displayDate(metadata.createdAt)}, over one year ago`);
        }
        if (stale && !metadata.archived) {
          reasons.push(`last push ${displayDate(metadata.pushedAt)} is over 12 months old`);
        }
      } else if (entry.label === 'zzz') {
        if (recent && !metadata.archived) {
          reasons.push(`last push ${displayDate(metadata.pushedAt)} is within 12 months`);
        }
      } else if (stale && !metadata.archived) {
        reasons.push('no push in 12 months and entry is not marked :zzz:');
      }

      if (reasons.length) {
        drift.push({
          entry,
          metadata,
          reasons,
          suggestion: suggestedChange(entry, reasons, metadata.archived, stale),
        });
      }
    }
  }

  return drift;
}

function addFullReport(core, repositories, now) {
  const lines = [
    '## Repository status',
    '',
    `Checked ${repositories.length} unique GitHub repositories at ${now.toISOString()}.`,
    '',
    '| Repository | Entry labels | Archived | Last push | Stars |',
    '| --- | --- | --- | --- | ---: |',
  ];

  for (const repository of repositories) {
    if (!repository.metadata) {
      lines.push(`| [${escapeCell(`${repository.owner}/${repository.name}`)}](${repository.url}) | ${escapeCell(repository.entries.map((entry) => entry.label ? `:${entry.label}:` : 'none').join(', ') || 'not a list entry')} | lookup failed | — | — |`);
      continue;
    }
    const metadata = repository.metadata;
    const labels = repository.entries.map((entry) => entry.label ? `:${entry.label}:` : 'none').join(', ') || 'not a list entry';
    lines.push(`| [${escapeCell(metadata.fullName)}](${metadata.url}) | ${escapeCell(labels)} | ${metadata.archived ? 'yes' : 'no'} | ${displayDate(metadata.pushedAt)} | ${metadata.stars} |`);
  }

  core.summary.addRaw(`${lines.join('\n')}\n`);
}

async function findOpenIssue(github, context) {
  const query = `repo:${context.repo.owner}/${context.repo.repo} is:issue is:open in:title "${ISSUE_TITLE}"`;
  const { data } = await github.rest.search.issuesAndPullRequests({ q: query, per_page: 100 });
  return data.items.find((issue) => issue.title === ISSUE_TITLE && issue.body && issue.body.includes(ISSUE_MARKER));
}

async function maintainIssue(github, context, core, repositories, drift, now) {
  const existing = await findOpenIssue(github, context);
  const runUrl = `${context.serverUrl}/${context.repo.owner}/${context.repo.repo}/actions/runs/${context.runId}`;
  const lines = [
    ISSUE_MARKER,
    `Last checked ${now.toISOString()} across ${repositories.length} unique GitHub repositories. The [full repository report](${runUrl}) is in the workflow run summary.`,
    '',
  ];

  if (drift.length) {
    lines.push(
      '## Label drift',
      '',
      '| Entry | Current label | Archived | Last push | Stars | Finding | Suggested change |',
      '| --- | --- | --- | --- | ---: | --- | --- |',
    );
    for (const item of drift) {
      lines.push(`| [${escapeCell(item.entry.name)}](${item.entry.url}) | ${item.entry.label ? `:${item.entry.label}:` : 'none'} | ${item.metadata.archived ? 'yes' : 'no'} | ${displayDate(item.metadata.pushedAt)} | ${item.metadata.stars} | ${escapeCell(item.reasons.join('; '))} | ${escapeCell(item.suggestion)} |`);
    }
    lines.push('');
  }

  const failures = repositories.filter((repository) => repository.error);
  if (failures.length) {
    lines.push('## Lookup failures', '', '| Repository | Error |', '| --- | --- |');
    for (const repository of failures) {
      lines.push(`| [${escapeCell(`${repository.owner}/${repository.name}`)}](${repository.url}) | ${escapeCell(repository.error)} |`);
    }
    lines.push('');
  }

  if (!drift.length && !failures.length) {
    lines.push('No repository label drift or lookup failures were detected.', '');
  }

  lines.push('Thresholds are defined in [CONTRIBUTING.md](https://github.com/' + `${context.repo.owner}/${context.repo.repo}` + '/blob/main/CONTRIBUTING.md#emoji-conventions). Source files are never modified by this workflow.');
  const body = lines.join('\n');

  if (!drift.length && !failures.length) {
    if (existing) {
      await github.rest.issues.update({
        owner: context.repo.owner,
        repo: context.repo.repo,
        issue_number: existing.number,
        body,
        state: 'closed',
        state_reason: 'completed',
      });
      core.info(`Closed resolved issue #${existing.number}`);
    } else {
      core.info('No label drift or lookup failures found');
    }
    return;
  }

  if (existing) {
    await github.rest.issues.update({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: existing.number,
      body,
    });
    core.info(`Updated issue #${existing.number} with ${drift.length} drifted entries and ${failures.length} lookup failures`);
  } else {
    const { data: issue } = await github.rest.issues.create({
      owner: context.repo.owner,
      repo: context.repo.repo,
      title: ISSUE_TITLE,
      body,
    });
    core.info(`Created issue #${issue.number} with ${drift.length} drifted entries and ${failures.length} lookup failures`);
  }
}

module.exports = async ({ github, context, core }) => {
  const repositories = readRepositories();
  if (!repositories.length) {
    throw new Error('No GitHub repository links found in README.md');
  }

  await fetchMetadata(github, repositories);
  const now = new Date();
  const drift = findDrift(repositories, now);
  addFullReport(core, repositories, now);
  await maintainIssue(github, context, core, repositories, drift, now);
  await core.summary.write();
  core.setOutput('drift_count', drift.length);
  core.setOutput('lookup_failure_count', repositories.filter((repository) => repository.error).length);
};
