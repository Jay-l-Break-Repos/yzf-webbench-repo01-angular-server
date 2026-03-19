FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY package*.json ./
RUN npm install

COPY . .

# Build Angular app at image build time.
# Source is in /app/app/ (where angular.json lives).
# node_modules is at /app/, so we symlink it into /app/app/.
RUN ln -s /app/node_modules /app/app/node_modules && \
    cd /app/app && \
    npx ng build --configuration=production

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
