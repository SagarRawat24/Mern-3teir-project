from node:22-alpine AS Base

WORKDIR /app

COPY package*.json ./

Run npm install 

COPY . .


from node:22-alpine

workdir app

copy --from=Base /app . 

COPY .env .env.local

EXPOSE 5173

<<<<<<< HEAD

CMD [ "npm", "run" ,"dev" ]








=======
CMD [ "npm", "run", "dev" ]
>>>>>>> b646a135f68d9e1d35b3fcbf652727bb130c0a9f
