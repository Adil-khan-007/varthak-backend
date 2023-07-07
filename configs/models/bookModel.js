const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    Bookname: String,
    author: String,
    title: String,
    image: String,
    price: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("book", bookSchema);

module.exports = { bookModel };
