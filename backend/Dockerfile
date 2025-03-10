from node:22-alpine AS Base

WORKDIR /app

COPY package*.json ./

Run npm install 

COPY . .


from node:22-alpine

workdir app

copy --from=Base /app . 

COPY .env .env.local

EXPOSE 4000


CMD [ "npm", "run" ,"server" ]








