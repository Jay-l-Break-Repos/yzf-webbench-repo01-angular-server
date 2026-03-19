#!/usr/bin/env sh
set -eu

# Angular app was pre-built during Docker image build.
# Serve the static output with 'serve'.

if [ -d /app/app/dist/angular/browser ]; then
  exec serve -s /app/app/dist/angular/browser -l 5173
elif [ -d /app/app/dist/angular ]; then
  exec serve -s /app/app/dist/angular -l 5173
else
  echo "ERROR: Angular build output not found!" >&2
  ls -laR /app/app/dist/ 2>&1 || echo "No dist directory found" >&2
  exit 1
fi
