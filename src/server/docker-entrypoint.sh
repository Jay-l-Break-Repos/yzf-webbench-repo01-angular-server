#!/usr/bin/env sh
set -eu

cd /app

# Copy starter code to working directory if not already present
if [ ! -d src ] && [ -d app ]; then
  cp -a app src
fi

# Ensure node_modules symlink exists
if [ ! -e /app/src/node_modules ]; then
  ln -sf /app/node_modules /app/src/node_modules
fi

# Build if not already built
if [ ! -d /app/src/dist/angular/browser ]; then
  cd /app/src
  npx ng build --configuration=production
  cd /app
fi

exec serve -s /app/src/dist/angular/browser -l 5173
