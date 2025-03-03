from node:22-alpine AS Base

WORKDIR /app

COPY package*.json ./

Run npm install 

COPY . .


from node:22-alpine

workdir app

copy --from=Base /app . 

COPY frontend/.env .env.local

EXPOSE 5173

CMD [ "npm" "run" "dev" ]
