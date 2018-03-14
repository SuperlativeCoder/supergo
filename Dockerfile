FROM node

LABEL MAINTAINER superbiger "superbiger@qq.com"
LABEL version="0.1"
LABEL description="supergo hubot manager for slack"

ARG HUBOT_SLACK_TOKEN_ARG
ENV HUBOT_SLACK_TOKEN ${HUBOT_SLACK_TOKEN_ARG}

RUN mkdir -p /supergo
COPY . /supergo
WORKDIR /supergo

RUN yarn install