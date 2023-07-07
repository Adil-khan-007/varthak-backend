const mongoose = require("mongoose");

const connectDatabase = async (req,res)=>{
    return mongoose.connect("mongodb+srv://grocery:<grocery_007>@cluster0.r8m0k0i.mongodb.net/varthak?retryWrites=true&w=majority");
}

module.exports = connectDatabase;