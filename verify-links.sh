#!/usr/bin/env bash
# Live-link verification for README.md: fetches every unique entry URL and reports HTTP status.
set -u
cd "$(dirname "$0")"
urls=$(grep -oE 'https?://[^) >]+' README.md | sort -u)
fail=0
for u in $urls; do
  code=$(curl -sS -L -o /dev/null -w '%{http_code}' --max-time 20 "$u" 2>/dev/null || echo "ERR")
  case "$code" in
    200|301|302) ;;
    403|429) echo "RESTRICTED $code $u" ;;
    *) echo "DEAD $code $u"; fail=$((fail+1)) ;;
  esac
done
echo "Checked: $(echo "$urls" | wc -l | tr -d ' ') URLs; dead/errors: $fail"
exit $fail
