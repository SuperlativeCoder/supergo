FROM node

LABEL MAINTAINER superbiger "superbiger@qq.com"
LABEL version="0.1"
LABEL description="[新后台，hubot, 中台]"

RUN mkdir -p /mantle
COPY . /mantle
WORKDIR /mantle

RUN yarn install

RUN yarn run build:hubot
RUN yarn run build:test