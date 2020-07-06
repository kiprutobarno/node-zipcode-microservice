FROM node:12.18-alpine

# create directory
RUN mkdir -p /app


# set the working directory to /app directory
WORKDIR /app

# copy package.json and yarn.lock files from project's root directory to /app
COPY  package.json yarn.lock ./

RUN yarn install

# copy all files from the project's root to /app
COPY . .

ENV ZIPCODE_API_KEY="DhTtxj3lYBDpQHJwnwLFrvpoYe54yd13kb8YykpfabbPyrMWBe586NiN68afTC9S"

EXPOSE 8000/tcp

CMD ["yarn", "start"]