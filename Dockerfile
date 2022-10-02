FROM node:16.15-alpine3.15 as builder

COPY frontend ./frontend

RUN cd ./frontend && npm i && npm run build

FROM nginx:alpine 

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /frontend/build /usr/share/nginx/html

EXPOSE 3000 80

ENTRYPOINT [ "nginx","-g","daemon off;" ]