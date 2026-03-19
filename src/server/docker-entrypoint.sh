#!/usr/bin/env sh
set -eu

cd /app

# Copy starter code to working directory if not already present
if [ ! -d src ] && [ -d app ]; then
  cp -a app src
fi

cd src
npx ng build
cd /app
exec serve -s src/dist/angular/browser -l 5173
