# pull the official base image
FROM node:alpine AS builder
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies and build
COPY package.json ./
COPY package-lock.json ./
RUN npm i 
COPY . .
RUN npm run build

# nginx state for serving content
FROM nginx:alpine
# Copy .env file and shell script to container
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY ./env.sh .
COPY .env .
COPY --from=builder /app/build .
COPY --from=builder /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Containers run nginx with global directives and daemon off
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]
