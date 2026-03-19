FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY package*.json ./
RUN npm install

COPY . .

# Pre-build: copy app source to src, symlink node_modules, build
RUN cp -a app src && \
    ln -s /app/node_modules /app/src/node_modules && \
    cd /app/src && \
    npx ng build --configuration=production

EXPOSE 5173

CMD ["serve", "-s", "/app/src/dist/angular/browser", "-l", "5173"]
