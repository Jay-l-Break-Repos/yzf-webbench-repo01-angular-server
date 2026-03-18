FROM public.ecr.aws/docker/library/node:20

WORKDIR /app

COPY package*.json ./
RUN npm install && npm install -g serve@14.2.4

COPY . .

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
