const express = require("express");
const { AuthRouter } = require("./Routes/UserRoutes.js");
const { connectDatabase } = require("./configs/connectdatabse/database");
const { BookRouter } = require("./Routes/BookRouter.js");

const app = express();

app.use(express.json());

app.use(AuthRouter);

app.use(BookRouter);

const PORT = process.argv[2] || "3001";

app.listen(PORT, async () => {
  try {
    await connectDatabase;
    console.log(`server listening on port ${PORT}`);
  } catch (err) {
    console.log(err);
  }
  console.log("hello");
});
