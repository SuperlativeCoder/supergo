FROM node

COPY ./ /supergo

RUN cd supergo \
    && npm install

# hubot port
EXPOSE 8081
# server port
EXPOSE 8082

CMD cd supergo && npm run start