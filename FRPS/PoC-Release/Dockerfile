FROM ubuntu:22.04

WORKDIR /app/

RUN apt-get update
RUN apt-get install -y python3 python3-pip python3-sqlalchemy

COPY ./requirements.txt /app/requirements.txt

RUN pip3 install -r /app/requirements.txt

COPY ./app/ /app/app/

CMD [ "flask", "run", "--host", "0.0.0.0" ]
