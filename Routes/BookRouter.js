const express = require("express");
const { Authentication } = require("../middleware/Authentication");
const { myBooks, addBook, allBooks } = require("../Controllers/book");

const BookRouter = express.Router();

BookRouter.get("/book", Authentication, myBooks);

BookRouter.post("/book", Authentication, addBook);

BookRouter.get("/allbook", allBooks);

module.exports = {
  BookRouter,
};
