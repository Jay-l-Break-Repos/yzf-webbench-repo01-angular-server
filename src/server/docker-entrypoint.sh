#!/usr/bin/env sh
set -eu

cd /app

if [ ! -d src ] && [ -d app ]; then
  cp -a app src
fi

mkdir -p src

if [ ! -f src/index.html ]; then
  cat > src/index.html <<'EOF'
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dockerized Initial Case</title>
  </head>
  <body>
    <main>Dockerized initial case</main>
  </body>
</html>
EOF
fi

# Make node_modules available in the src directory for the Angular build
if [ -d /app/node_modules ] && [ ! -d /app/src/node_modules ]; then
  ln -s /app/node_modules /app/src/node_modules
fi

# Build the Angular application from the src directory (where angular.json lives)
cd /app/src
npx ng build --configuration=production 2>&1

# The Angular application builder outputs to dist/angular/browser
if [ -d /app/src/dist/angular/browser ]; then
  exec serve -s /app/src/dist/angular/browser -l 5173
elif [ -d /app/src/dist/angular ]; then
  exec serve -s /app/src/dist/angular -l 5173
else
  exec serve -s /app/src/dist -l 5173
fi
