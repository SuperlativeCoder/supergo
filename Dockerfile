FROM node

LABEL MAINTAINER superbiger "superbiger@qq.com"
LABEL version="0.1"
LABEL description="supergo hubot manager for slack"

RUN mkdir -p /supergo
COPY . /supergo
WORKDIR /supergo

RUN yarn install pm2 -g

RUN yarn install