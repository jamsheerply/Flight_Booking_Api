FROM node:20.18-alpine3.21

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls -al

EXPOSE 3000

CMD [ "npm", "start" ]