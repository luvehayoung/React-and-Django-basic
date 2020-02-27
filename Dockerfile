FROM nikolaik/python-nodejs:python3.7-nodejs12-alpine

WORKDIR /home/front
ENV PATH  /home/front/node_modules/.bin:$PATH

COPY ./front/package.json .
RUN npm install

COPY ./front . 

WORKDIR /home/back
COPY ./back/project .

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

RUN apk update && apk add \
  vim screen mysql-server mysql-client

EXPOSE 8000 3000

# WORKDIR /home/back
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# manually start python + ctrl+ a d -> escape
WORKDIR /home/front
CMD ["npm", "start","/home/front/pacakage.json"]

# to main
WORKDIR /home




