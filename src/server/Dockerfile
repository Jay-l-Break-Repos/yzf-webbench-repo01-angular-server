FROM public.ecr.aws/docker/library/node:20

WORKDIR /app

RUN npm install -g serve@14.2.4
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["sh", "/app/docker-entrypoint.sh"]
