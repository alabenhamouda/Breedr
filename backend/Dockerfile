FROM node:16-alpine as build
WORKDIR /app
COPY ./package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

FROM node:16-alpine as run
WORKDIR /app
COPY --from=build /app .
CMD ["npm", "run", "start:prod"]
