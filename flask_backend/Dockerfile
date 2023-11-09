FROM python:3.10-alpine
WORKDIR /flask_backend
COPY ./requirements.txt /flask_backend
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD [ "flask", "run", "--host", "0.0.0.0"]