#!/usr/bin/env bash
set -euo pipefail

# Navigate to the Vite application directory
cd "$(dirname "$0")/obsidian-app"

# Ensure npm is available (some environments do not source the nvm PATH)
if ! command -v npm >/dev/null 2>&1; then
  if [ -d "$HOME/.nvm/versions/node" ]; then
    # shellcheck disable=SC2012
    latest_node_dir="$(ls -1 "$HOME/.nvm/versions/node" | sort -V | tail -n 1)"
    if [ -n "$latest_node_dir" ] && [ -d "$HOME/.nvm/versions/node/$latest_node_dir/bin" ]; then
      export PATH="$HOME/.nvm/versions/node/$latest_node_dir/bin:$PATH"
    fi
  fi
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm command not found. Please ensure Node.js is installed." >&2
  exit 1
fi

# Install dependencies if they have not been installed yet
if [ ! -d node_modules ]; then
  npm ci
fi

# Build the production bundle
npm run build

# Start the Vite preview server on the provided PORT (default 4173)
PORT="${PORT:-4173}"
npm run preview -- --host 0.0.0.0 --port "$PORT"
