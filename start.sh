#!/usr/bin/env bash
set -euo pipefail

# Navigate to the Vite application directory
cd "$(dirname "$0")/obsidian-app"

# Ensure npm is available (some environments do not source the nvm PATH)
ensure_npm() {
  if command -v npm >/dev/null 2>&1; then
    return
  fi

  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

  # Install nvm on-the-fly if it has not been installed yet. Some
  # execution environments ship without Node.js preinstalled which would
  # otherwise cause the script to fail immediately.
  if [ ! -s "$NVM_DIR/nvm.sh" ]; then
    if command -v curl >/dev/null 2>&1; then
      curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash >/dev/null 2>&1
    elif command -v wget >/dev/null 2>&1; then
      wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash >/dev/null 2>&1
    fi
  fi

  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck disable=SC1090
    . "$NVM_DIR/nvm.sh"

    if command -v nvm >/dev/null 2>&1; then
      if ! nvm use --lts >/dev/null 2>&1; then
        nvm install --lts >/dev/null 2>&1
        nvm use --lts >/dev/null 2>&1
      fi
    fi
  fi

  if ! command -v npm >/dev/null 2>&1 && [ -d "$NVM_DIR/versions/node" ]; then
    latest_node_dir="$(find "$NVM_DIR/versions/node" -maxdepth 1 -mindepth 1 -type d -exec basename {} \; | sort -V | tail -n 1)"
    if [ -n "$latest_node_dir" ] && [ -d "$NVM_DIR/versions/node/$latest_node_dir/bin" ]; then
      export PATH="$NVM_DIR/versions/node/$latest_node_dir/bin:$PATH"
    fi
  fi
}

ensure_npm

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
