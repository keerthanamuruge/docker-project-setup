# Docker compose

## Network
To connect the frontend and backend services in a single Docker Compose YAML file, you can define a network called app-tier and specify that both services should join this network. 

`networks:
      - app-tier`


## image

which name image is created or pull the latest created image in dockerhub.

`image: user/flask_backend`
`image: postgres:latest`

### docker hub

Docker Hub is a collaboration tool and a marketplace for community developers, open source contributors, and independent software vendors (ISVs) to distribute their code publicly. 

## Build

`build:
      context: ./flask_backend
      dockerfile: Dockerfile`

      Context  is folder name docker file where the docker file existed.

## Depends on

`depends_on:
      - db`

    Wait until the db service is ready. after it get created.

## Ports

`ports:
     - "5000:5000"`

     which it export port to actual port.

## Environment variable

`environment:   
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: users
      `

      we can use environment variable from docker compose to our porject

## Db host

`"postgresql://postgres:postgres@db:5432/users"
`

db is service name of postgres. or else we can docker inspect and get host and use it.


# Docker


## backend
`FROM python:3.10-alpine
WORKDIR /flask_backend
COPY ./requirements.txt /flask_backend
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD [ "flask", "run", "--host", "0.0.0.0"]`

From is where we pull image from docker hub

workdir is create directory in docker, where copy and paste our code. 

first copy requirement and install. so every time rebuild won't take much time.

then copy the whole code and from docker to outside it run of port 5000.

the cmd to run the program.



## frontend

```FROM node:20-alpine AS build
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


same but nginx is needed to run the frontend application. nginx default port is 80.