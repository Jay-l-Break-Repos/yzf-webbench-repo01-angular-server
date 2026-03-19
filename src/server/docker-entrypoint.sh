#!/usr/bin/env sh
set -eu

cd /app

# Copy starter code to working directory if not already present
if [ ! -d src ] && [ -d app ]; then
  cp -a app src
fi

# Symlink node_modules so Angular CLI can find dependencies
if [ ! -d /app/src/node_modules ]; then
  ln -s /app/node_modules /app/src/node_modules
fi

cd src
exec npx ng serve --host 0.0.0.0 --port 5173
