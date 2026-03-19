FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY package*.json ./
RUN npm install

COPY . .

# Symlink node_modules into the Angular source directory
RUN ln -s /app/node_modules /app/app/node_modules

# Build Angular app at image build time
# Use || true so the Docker build doesn't fail if ng build has issues
RUN cd /app/app && npx ng build --configuration=production || echo "Build failed, will retry at runtime"

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
