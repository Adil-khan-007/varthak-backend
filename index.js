const express = require("express");
const { connectDatabase } = require("./configs/connectdatabse/database");

const app = express();

app.use(express.json());

const PORT = process.argv[2] || "3001"

app.listen(PORT, async ()=>{
    try{
       await connectDatabase;
       console.log(`server listening on port ${PORT}`)
    }
    catch(err){
        console.log(err);
    }
})