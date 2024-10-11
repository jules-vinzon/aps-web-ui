FROM node:12.22.0
WORKDIR /app
ADD ./package*.json /app/
ADD ./yarn.lock /app/
RUN yarn install
ADD . /app/
RUN yarn run build
CMD (yarn run start)
