FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4
COPY package*.json ./
RUN npm install

COPY . .

# Build Angular app at image build time
# The Angular source is in /app/app/, but node_modules is at /app/
# Symlink node_modules so ng can find dependencies
RUN ln -s /app/node_modules /app/app/node_modules && \
    cd /app/app && \
    npx ng build --configuration=production

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
