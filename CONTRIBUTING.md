# Contributing to Awesome Security MCP

Thanks for considering a contribution! This list is curated for accuracy and usefulness, not length.

## Ground rules

1. **One MCP server per PR** (or a small, coherent batch) with a clear reason it belongs.
2. **Format:** `- [Name](URL) - One-line factual description (not marketing copy).`
   Optional status prefixes are described under [Emoji conventions](#emoji-conventions). No icon means no special maturity designation.
3. **Verify the link works** and, for active entries, that the project is maintained (recent commits/releases or a living service). Dormant historical/reference entries must be marked `:zzz:`; archived, deprecated and unsupported entries belong in `ARCHIVED.md`.
4. **Disclose hosted status and proprietary/source-available licensing** where relevant (e.g. SONAR Source-Available License).
5. **No duplicates** — search the list before adding.
6. **Alphabetical order** within each section.
7. **Honest descriptions** — what the tool actually does, not what its landing page promises.
8. **No self-promotion without disclosure** — if it's your own project, say so in the PR.

## Emoji conventions

- `:star:` — mature **and** more than 100 GitHub stars. Both conditions are required; star count alone does not establish maturity.
- `:new:` — project less than one year old. Remove this label on the project's first anniversary.
- `:package:` — notable package/toolkit.
- `:zzz:` — no push in 12 months, **or** deprecated/archived. Dormant reference entries can remain in `README.md`; move archived, deprecated and unsupported entries to `ARCHIVED.md`.

## Process

1. Fork the repo and create a branch (`add-<tool-name>`).
2. Edit `README.md` following the rules above, or `ARCHIVED.md` when moving a retired entry. Only MCP-related entries: MCP servers, clients/hosts, transports, best practices and learning resources.
3. Open a PR with a short justification and any relevant links (docs, release notes).
4. A reviewer will check the link, description accuracy, label thresholds and section fit before merging.

## Automated maintenance

- **Link check:** `.github/workflows/link-check.yml` runs lychee against `README.md` on every pull request and every Monday at 06:00 UTC. Dead links fail the check and open or update a single `Broken links in README.md` issue containing the lychee report.
- **Repository status:** `.github/workflows/repo-status.yml` runs every Monday at 07:00 UTC. It uses the workflow's `GITHUB_TOKEN` to read each linked GitHub repository's archived state, creation date, last push and star count. The workflow run summary contains the full report; a `Repository status label drift` issue lists only label mismatches and lookup failures.
- Status checks flag archived entries still in `README.md`, `:star:` entries with 100 or fewer stars or no push in 12 months, `:new:` entries at least one year old, stale entries missing `:zzz:`, and `:zzz:` entries with a push in the last 12 months. A resolved status issue is closed automatically.
- Both workflows have read-only repository access plus permission to maintain their report issues. They never change list entries themselves; reviewers should confirm the findings and update labels or move entries as appropriate.

## Reporting issues

Found a dead link, a stale description, or a tool that no longer belongs? Comment on the relevant automated issue when one exists, or open an issue with the section and the reason.
