FROM node:10-alpine
COPY ./package.json ./package.json
RUN yarn
COPY . .
RUN yarn build
CMD [ "yarn", "start:prod" ]