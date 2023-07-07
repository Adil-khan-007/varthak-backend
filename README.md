#  Varthak Assignment

## Features

- JWT Based Authentication
- Role Based Authorization
- Create Book
- View All Books
- See all Books created before 10 min. and Earlier
- See all Books created within last 10 min.


## Tech Stack

**Server:** Node.js, Express.js, Mongoose,

**Database:** MongoDB.

**NPM Packages:** express, dotenv, jsonwebtoken, mongoose, mongodb


## API Reference

#### Welcome

```http
  GET /allBooks
```

## For Login And Registration


#### User Register

```http
  POST /signup
```

#### User Login

```http
  POST /login
```

## For Books


#### For Create Book
- Authorization Required
- Only `CREATOR` can create books when logged in

```http
  POST /books
```

#### Retrieve all books created 10 minutes ago and earlier

```http
  GET /booksbytime?old=1
```

#### Retrieve all books created less than 10 minutes ago

```http
  GET /booksbytime?new=1
```

#### VIEWER/CREATOR can see all books created by them when logged in

```http
  GET /books
```

#### VIEW_ALL can see all books without loggged in

```http
  GET /allbooks/
```

#### Deploy link
https://coffee-parrot-robe.cyclic.app/
