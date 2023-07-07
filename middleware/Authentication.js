const jwt = require("jsonwebtoken");

const Authentication = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (token) {
    const decoded = jwt.verify(token, process.env.SECRET);
    if (decoded) {
      const userId = decoded.userId;
      req.body.userId = userId;

      next();
    } else {
      res.send({ msg: "you are not authenticated login please" });
    }
  } else {
    res.send({ msg: "you are not authenticated" });
  }
};

module.exports = { Authentication };
