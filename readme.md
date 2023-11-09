# Docker compose
### docker hub

Docker Hub is a collaboration tool and a marketplace for community developers, open source contributors, and independent software vendors (ISVs) to distribute their code publicly. 

## Network
To connect the frontend and backend services in a single Docker Compose YAML file, you can define a network called app-tier and specify that both services should join this network. 

```
networks:
      - app-tier
```


## image

which name image is created or pull the latest created image in dockerhub.

```
image: user/flask_backend
```
```
image: postgres:latest
```




## Build

```
build:
      context: ./flask_backend
      dockerfile: Dockerfile
```
Context is folder name docker file where the docker file existed. To Run Docker, docker configuration is three. By looking on the blueprint image is build.

## Depends on

```
depends_on:
      - db
```
Wait until the db service is ready. after it get created.

## Ports

```
ports:
     - "5000:5000"
```
which it export port to actual port.

left_port: right_port

right port -> actual port of the application running.

left port -> is the port it exposed outside the docker.

## Environment variable

```
environment:   
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: users
```

we can use environment variable from docker compose to our porject.


### Db host

```
"postgresql://postgres:postgres@db:5432/users"
```

db is service name of postgres. or else we can docker inspect and get host and use it.



## Note

[Angular docker set up](https://github.com/keerthanamuruge/docker-project-setup/blob/master/frontend/angular-docker-setup.md)
[flask docker setup](https://github.com/keerthanamuruge/docker-project-setup/blob/master/flask_backend/flask-docker-setup.md)
