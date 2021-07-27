FROM node:lts-alpine as builder

WORKDIR /app

COPY . .
RUN npm i
ARG configuration=production
RUN npm run build -- --outputPath=./dist/out --configuration $configuration

FROM nginx:1.20.1-alpine

COPY --from=builder /app/dist/out/ /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
