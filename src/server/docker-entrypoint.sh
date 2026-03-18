#!/usr/bin/env sh
set -eu

cd /app

# The Angular app was built during Docker image build
# Output is in /app/app/dist/angular/browser (Angular 19 application builder)

# Determine the correct dist directory to serve
if [ -d /app/app/dist/angular/browser ]; then
  SERVE_DIR="/app/app/dist/angular/browser"
elif [ -d /app/app/dist/angular ]; then
  SERVE_DIR="/app/app/dist/angular"
elif [ -d /app/app/dist ]; then
  SERVE_DIR="/app/app/dist"
else
  # Fallback: create a minimal index.html
  mkdir -p /app/dist
  cat > /app/dist/index.html <<'EOF'
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
  SERVE_DIR="/app/dist"
fi

echo "Serving from: $SERVE_DIR"
ls -la "$SERVE_DIR"

exec serve -s "$SERVE_DIR" -l 5173
