FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

# Copy everything into /app
COPY . .

# Install dependencies from the server-level package.json
RUN npm install

# Copy the Angular app source into the expected location
# angular.json sourceRoot is "src", but the entry points (main.ts, index.html)
# are relative to the project root (where angular.json lives)
# So we build from /app/app/ where angular.json is located
RUN cd /app/app && \
    ln -s /app/node_modules /app/app/node_modules && \
    mkdir -p public && \
    npx ng build --configuration=production && \
    echo "Angular build completed successfully"

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
