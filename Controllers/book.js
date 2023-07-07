const { bookModel } = require("../configs/models/bookModel");


const addBook = async (req, res) => {
  try {
    const newBook = await bookModel.create(req.body);
    console.log(newBook);
    res.status(200).send({ message: "Book added to the library" });
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

const myBooks = async (req, res) => {
  const userId = req.body.userId;
  try {
    const allBook = await bookModel.find({ userId: userId });
    res.status(200).send({ data: allBook });
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

const allBooks = async (req, res) => {
  try {
    const allBook = await bookModel.find();
    res.status(200).send({ data: allBook });
  } catch (err) {
    res.status(500).send({ message: "something went wrong" });
  }
};

const findBookByTime = async (req,res)=>{
  try{
    const {old , newBook } = req.query;

    let query  = {}

    if (old) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        query = { ...query, createdAt: { $lte: tenMinutesAgo } };
      } else if (newBook) {
        const tenMinutesAgo = new Date(Date.now() - 10 * 60 * 1000);
        query = { ...query, createdAt: { $gt: tenMinutesAgo } };
      }

      const data = await bookModel.find(query);
      res.send({message : data});
  }
  catch(err){
    res.status(500).send({message : "Something went wrong"})
  }
}

module.exports = {
  addBook,
  myBooks,
  allBooks,
  findBookByTime,
};
