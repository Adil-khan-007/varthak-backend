const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    Bookname : String,
    author : String,
    title : String,
    image : String,
    price : Number,
    status : {type : String,default : "viewer"},
    userID : String
},{
    timestamps : true
})

const bookModel = mongoose.model("book",bookSchema);

module.exports = bookModel;