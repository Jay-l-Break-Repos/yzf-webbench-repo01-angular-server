#!/usr/bin/env sh
set -eu

cd /app

echo "=== Docker entrypoint starting ==="
echo "Current directory: $(pwd)"
echo "Contents of /app:"
ls -la /app/

# Copy starter code to working directory if not already present
if [ ! -d src ] && [ -d app ]; then
  echo "Copying app/ to src/..."
  cp -a app src
fi

echo "Contents of /app/src:"
ls -la /app/src/

# Symlink node_modules so Angular CLI can find dependencies
if [ -d /app/node_modules ] && [ ! -e /app/src/node_modules ]; then
  echo "Creating node_modules symlink..."
  ln -sf /app/node_modules /app/src/node_modules
fi

echo "Verifying angular.json exists:"
ls -la /app/src/angular.json

echo "Verifying node_modules symlink:"
ls -la /app/src/node_modules/.bin/ng

cd /app/src
echo "Starting ng serve from $(pwd)..."
exec npx ng serve --host 0.0.0.0 --port 5173
