FROM node:18 as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -g @ionic/cli
RUN npm install
COPY . .

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/www /usr/share/nginx/hml

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
