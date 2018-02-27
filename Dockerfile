FROM node

LABEL MAINTAINER superbiger "superbiger@qq.com"
LABEL version="0.1"
LABEL description="myhubot"

RUN mkdir -p /supergo
COPY . /supergo
WORKDIR /supergo

RUN npm install

# hubot port
EXPOSE 8081
# server port
EXPOSE 8082

CMD ["/bin/bash", "-c", "npm run start"]