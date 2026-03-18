#!/usr/bin/env sh
set -eu

cd /app

# If dist doesn't have index.html (build failed), rebuild
if [ ! -f dist/index.html ]; then
  if [ -d app ]; then
    cd /app/app
    npm install
    npx ng build --configuration=production
    mkdir -p /app/dist
    cp -r dist/angular/browser/* /app/dist/ 2>/dev/null || cp -r dist/angular/* /app/dist/ 2>/dev/null || true
    cd /app
  fi
fi

# Final fallback
if [ ! -f dist/index.html ]; then
  mkdir -p dist
  cat > dist/index.html <<'EOF'
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

exec serve -s dist -l 5173
