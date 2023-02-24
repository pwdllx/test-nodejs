# syntax=docker/dockerfile:latest
ARG APPLICATION_PORT=3000
ARG NODE_VERSION=18.14.1-alpine
ARG WORKING_DIRECTORY=/srv/www/pdb_test

FROM node:$NODE_VERSION AS base
ARG APPLICATION_PORT
EXPOSE $APPLICATION_PORT

#============
# DEVELOPMENT
#============
FROM base AS development
ARG WORKING_DIRECTORY

WORKDIR $WORKING_DIRECTORY
EXPOSE 9229

#======
# BUILD
#======
FROM base AS build

ARG WORKING_DIRECTORY
WORKDIR $WORKING_DIRECTORY

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

#===========
# PRODUCTION
#===========
FROM node:$NODE_VERSION AS production

ARG APPLICATION_PORT
ARG WORKING_DIRECTORY

WORKDIR $WORKING_DIRECTORY
COPY --from=build \
  $WORKING_DIRECTORY/README.md \
  $WORKING_DIRECTORY/package.json \
  $WORKING_DIRECTORY/package-lock.json \
  ./
COPY --from=build $WORKING_DIRECTORY/node_modules ./node_modules
COPY --from=build $WORKING_DIRECTORY/data ./data
COPY --from=build $WORKING_DIRECTORY/app ./app

EXPOSE $APPLICATION_PORT
ENTRYPOINT npm start