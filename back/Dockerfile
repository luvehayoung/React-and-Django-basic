FROM python:3.7.4

WORKDIR /app/
COPY project .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN apt-get update && apt-get install -y \
  vim


EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]