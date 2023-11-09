## backend
```
FROM python:3.10-alpine
WORKDIR /flask_backend
COPY ./requirements.txt /flask_backend
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD [ "flask", "run", "--host", "0.0.0.0"]
```

From is where we pull image from docker hub

workdir is create directory in docker, where copy and paste our code. 

first copy requirement and install. so every time rebuild won't take much time.

then copy the whole code

EXPOSE the port which is what actual project is running port 5000.

the cmd to run the program.

