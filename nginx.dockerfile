FROM node:14.18.2-alpine as builder
WORKDIR '/app'
COPY ./front-api/package.json .
RUN npm install
COPY ./front-api .
RUN npm run build
FROM nginx
COPY --from=builder /app/dist/MedTn /usr/share/nginx/html