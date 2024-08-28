FROM python:3.11-slim

WORKDIR /backend-userprofile

COPY requirements.txt /backend-userprofile/
RUN pip3 install -r /backend-userprofile/requirements.txt

COPY . .


CMD ["python", "manage.py", "runserver", "0.0.0.0:8006"]

