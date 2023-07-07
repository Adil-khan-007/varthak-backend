const express = require("express");
const { Authentication } = require("../middleware/Authentication");
const { myBooks, addBook, allBooks, findBookByTime, } = require("../Controllers/book");

const BookRouter = express.Router();

BookRouter.get("/books", Authentication, myBooks);

BookRouter.post("/books", Authentication, addBook);

BookRouter.get("/allbooks", allBooks);

BookRouter.get("/booksbytime", findBookByTime);

module.exports = {
  BookRouter,
};
