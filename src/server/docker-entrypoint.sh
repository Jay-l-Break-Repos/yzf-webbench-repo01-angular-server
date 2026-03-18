#!/usr/bin/env sh
set -eu

cd /app

if [ ! -d src ] && [ -d app ]; then
  cp -a app src
fi

mkdir -p src
mkdir -p src/public

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

cd src
npx ng build --configuration development

if [ -d dist/angular/browser ]; then
  exec serve -s dist/angular/browser -l 5173
else
  exec serve -s dist/angular -l 5173
fi
