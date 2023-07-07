const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    Bookname: String,
    author: String,
    title: String,
    image: String,
    price: Number,
    userId: String,
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("book", bookSchema);

module.exports = { bookModel };
