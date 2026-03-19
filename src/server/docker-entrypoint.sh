#!/usr/bin/env sh
set -eu

cd /app

# Ensure node_modules symlink exists in app directory
if [ ! -e /app/app/node_modules ]; then
  ln -sf /app/node_modules /app/app/node_modules
fi

# If pre-built output exists, serve it with 'serve'
if [ -d /app/app/dist/angular/browser ]; then
  echo "Serving pre-built Angular app from /app/app/dist/angular/browser"
  exec serve -s /app/app/dist/angular/browser -l 5173
fi

# Fallback: try building at runtime then serving
echo "No pre-built output found, building now..."
cd /app/app
npx ng build --configuration=production 2>&1

if [ -d /app/app/dist/angular/browser ]; then
  echo "Build succeeded, serving from /app/app/dist/angular/browser"
  cd /app
  exec serve -s /app/app/dist/angular/browser -l 5173
fi

# Last resort: use ng serve
echo "Static build output not found, falling back to ng serve..."
cd /app/app
exec npx ng serve --host 0.0.0.0 --port 5173
