<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

# VEHICULUM | Coding-Challenge | Serve app via NodeJS Server

## Steps

1. Clone Repository
2. In the terminal write:

```
yarn install
```

3. Is important to have Nest CLI installed:

```bash
npm i -g @nestjs/cli
```

4. Start database:

```bash
docker-compose up -d
```

5. Start NestJs:

```bash
yarn start:dev
```

6. To create the database with the seed on Postman do a GET request to:

   http://localhost:3001/seed

## Used Stack

- MongoDB
- NestJs
- Docker-Compose
