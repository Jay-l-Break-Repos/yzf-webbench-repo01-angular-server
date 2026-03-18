FROM node:20-bookworm

WORKDIR /app

RUN npm install -g serve@14.2.4

COPY . .

RUN if [ -f package.json ]; then npm install; fi

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
