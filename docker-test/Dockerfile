FROM node:jod-trixie-slim
ENV MONGODB_USER_NAME=admin \
    MONGO_DB_PWD=password

RUN mkdir -p /usr/app

COPY . /usr/app

CMD ["node", "usr/app/src/index.js"]