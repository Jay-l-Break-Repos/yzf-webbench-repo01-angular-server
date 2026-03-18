FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY . .

# Install Angular dependencies and build
RUN cd /app/app && npm install && npx ng build --configuration=production

# Copy built files to dist directory for serving
RUN mkdir -p /app/dist && \
    cp -r /app/app/dist/angular/browser/* /app/dist/ 2>/dev/null || \
    cp -r /app/app/dist/angular/* /app/dist/ 2>/dev/null || true

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
