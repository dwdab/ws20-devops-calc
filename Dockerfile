FROM node:14-alpine

RUN mkdir /app
WORKDIR /app

COPY ./ /app/

ENTRYPOINT ["node", "index.js"]

CMD ["2", "5", "*"]
