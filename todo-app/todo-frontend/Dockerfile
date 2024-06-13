FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

FROM test-stage AS build-stage

# Use localhost:3000 if you want to run outside docker
#ENV VITE_BACKEND_URL="http://localhost:3000"

# Use localhost:3000 if you want to run inside docker with reverse proxy
ENV VITE_BACKEND_URL="http://localhost:8080/api/"

RUN npm run build

FROM nginx:1.25-alpine AS serve-stage

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html