#!/usr/bin/env bash
set -euo pipefail

# Navigate to the Vite application directory
cd "$(dirname "$0")/obsidian-app"

# Install dependencies if they have not been installed yet
if [ ! -d node_modules ]; then
  npm ci
fi

# Build the production bundle
npm run build

# Start the Vite preview server on the provided PORT (default 4173)
PORT="${PORT:-4173}"
npm run preview -- --host 0.0.0.0 --port "$PORT"
