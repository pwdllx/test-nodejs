# syntax=docker/dockerfile:latest
ARG APPLICATION_PORT=3000
ARG NODE_VERSION=18.14.1-alpine
ARG WORKING_DIRECTORY=/srv/www/pdb_test

FROM node:$NODE_VERSION AS base
ARG APPLICATION_PORT
ARG WORKING_DIRECTORY

WORKDIR $WORKING_DIRECTORY
COPY . .
EXPOSE $APPLICATION_PORT

#============
# DEVELOPMENT
#============
FROM base AS development
ARG WORKING_DIRECTORY

WORKDIR $WORKING_DIRECTORY
VOLUME $WORKING_DIRECTORY

RUN <<-eot
  apk update
  apk upgrade --no-cache
  apk add git
eot

RUN <<-eot
  if ([ ! -d "$WORKING_DIRECTORY/node_modules" ] || [ ! "$(ls -A $WORKING_DIRECTORY/node_modules)" ])
  then
    echo "Install dependencies"
    npm ci
  else
    echo "Skip dependencies installation"
  fi
  sleep 2.5s
eot

COPY <<-launch.json <<-settings.json ./.vscode/
  {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "Attach",
        "port": 9229,
        "request": "attach",
        "skipFiles": [
          "<node_internals>/**"
        ],
        "type": "node"
      }
    ]
  }
launch.json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true,
      "source.fixAll.stylelint": true
    },
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.linkedEditing": true,
    "editor.rulers": [
      80
    ],
    "eslint.format.enable": false,
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      "json",
      "jsonc",
      "typescript",
      "typescriptreact"
    ],
    "javascript.validate.enable": true,
    "typescript.validate.enable": true,
    "css.validate": false,
    "scss.validate": false,
    "less.validate": false
  }
settings.json

CMD npm run dev

#======
# BUILD
#======
FROM base AS build
RUN npm ci
RUN npm run build

#===========
# PRODUCTION
#===========
FROM node:$NODE_VERSION AS production
ARG APPLICATION_PORT
ARG WORKING_DIRECTORY

WORKDIR $WORKING_DIRECTORY
COPY --from=build $WORKING_DIRECTORY/package.json $WORKING_DIRECTORY/package-lock.json ./
COPY --from=build $WORKING_DIRECTORY/node_modules ./node_modules
COPY --from=build $WORKING_DIRECTORY/app ./app

EXPOSE $APPLICATION_PORT
CMD npm start