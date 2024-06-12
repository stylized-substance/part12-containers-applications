FROM node:20 AS test-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run test

FROM test-stage AS build-stage

#WORKDIR /usr/src/app

COPY --from=test-stage . .

ENV VITE_BACKEND_URL="http://localhost:3000"

RUN npm run build

FROM nginx:1.25-alpine AS serve-stage

COPY --from=build-stage . /usr/share/nginx/html