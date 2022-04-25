// Команда            Призначення
// docker pull        Завантажити образ Docker
// docker run         Запустити образ Docker як контейнер
// docker commit      Зберегти контейнер Docker як образ
// docker ps          Вивести список контейнерів

// https://nodejs.org/ru/docs/guides/nodejs-docker-webapp/

// Створити образ для веб-сервера на основі Node.js:
// $ docker build . -t fosa1990/contacts-service-nodejs-web-api

// Запушити образ на DockerHub:
// $ docker push fosa1990/contacts-service-nodejs-web-api

// Щоб додати новий тег [tagname] до цього сховища на DockerHub:
// $ docker push fosa1990/contacts-service-nodejs-web-api:tagname

// Запустити веб-сервер на основі образу:
// $ docker run --name contacts-api -p 80:8083 -d fosa1990/contacts-service-nodejs-web-api
// $ docker run --name contacts-api -p 8083:8083 -d fosa1990/contacts-service-nodejs-web-api

// list of containers:
// $ docker ps
