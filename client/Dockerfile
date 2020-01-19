# Stage 0, build stage for angular
FROM node:10-alpine as build-stage

WORKDIR /app
ADD package*.json /app/

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++

RUN npm install -g @angular/cli
RUN npm install --loglevel error

RUN apk del .gyp

COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
#Copy ci-dashboard-dist
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
#Copy default nginx configuration
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf