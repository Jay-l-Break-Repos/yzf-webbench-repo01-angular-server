#!/usr/bin/env sh
set -eu

cd /app

# The Angular app was pre-built during Docker image build.
# Output is in /app/app/dist/angular/browser (Angular 19 application builder).

if [ -d /app/app/dist/angular/browser ]; then
  SERVE_DIR="/app/app/dist/angular/browser"
elif [ -d /app/app/dist/angular ]; then
  SERVE_DIR="/app/app/dist/angular"
else
  SERVE_DIR="/app/app/dist"
fi

exec serve -s "$SERVE_DIR" -l 5173
