# Stage 0, build stage for angular
FROM node:12.16.1-alpine as build-stage

WORKDIR /app
ADD package*.json /app/

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

RUN npm ci

RUN apk del .gyp

COPY ./ /app/
RUN npm run build:prod

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf