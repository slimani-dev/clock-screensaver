#!/bin/bash

# Ensure fontconfig is available
if ! command -v fc-query &> /dev/null; then
  echo "❌ fc-query is not installed. Install it with: sudo apt install fontconfig"
  exit 1
fi

# Loop through font files in the current directory (adjust path if needed)
for font in *.ttf *.otf *.TTF *.OTF; do
  # Check if file exists (to avoid errors if no matching files)
  [ -e "$font" ] || continue

  # Extract the real font name using fc-query
  font_name=$(fc-query --format='%{fullname}\n' "$font")

  echo "$font_name: $font"
done
