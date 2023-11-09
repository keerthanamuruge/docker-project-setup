## frontend

```
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4200
CMD ["npm", "start"]

FROM nginx:alpine
COPY --from=build /app/dist/frontend/ /usr/share/nginx/html
EXPOSE 80
```

- From is where we pull image from docker hub,
alpine is latest one.

- workdir is create directory in docker, where copy and paste our code. 

- first copy requirement and install. so every time rebuild won't take much time.

- then copy the whole code

- EXPOSE the port which is what actual project is running port 4200.

- the cmd to run the program.

#### nginx:

Nginx is designed to efficiently serve static content, making it a great choice for serving Angular's compiled HTML, CSS, and JavaScript files. It can handle incoming HTTP requests and serve the application to clients. Without a web server like Nginx, your Angular application's static files won't be served to clients.

- pull the image
- COPY instruction is used in a multi-stage Docker build to copy the built Angular application files (located in /app/dist/frontend/ within the "build" stage) into the directory /usr/share/nginx/html in the final image. These files will be served by Nginx, which is a common practice for deploying Angular applications with Docker.
- 80 is the default port for nginx.

