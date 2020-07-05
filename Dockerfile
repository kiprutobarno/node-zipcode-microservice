FROM node:12.18-alpine

RUN mkdir -p /app

WORKDIR /app

COPY  package.json /app

COPY  yarn.lock /app

RUN yarn install

COPY . /app

EXPOSE 8000/tcp

CMD ["yarn", "start"]