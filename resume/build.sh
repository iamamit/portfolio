#!/bin/bash
# Rebuild resume/Amit_Gautam_Resume.pdf from resume/resume.html (headless Chrome, A4, 2 pages).
# Edit resume.html, run this, check the PDF, then commit and push: the site serves the new file.
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=8000 \
  --print-to-pdf="$DIR/Amit_Gautam_Resume.pdf" "file://$DIR/resume.html" 2>/dev/null
echo "Built $DIR/Amit_Gautam_Resume.pdf"
