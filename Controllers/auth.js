const jwt = require("jsonwebtoken");
const { userModel } = require("../configs/models/userModel");

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res
        .status(500)
        .send({ message: "name, email and password are mandatory" });
    }

    const exist = await userModel.findOne({ email });

    if (exist) {
      return res
        .status(404)
        .send({ message: "User with this email already exist" });
    }

    const user = await userModel.create({ name, email, password });

    res.send({ message: "Registration Succesfully" });
  } catch (err) {
    return res.status(500).send({ message: "Something went wrong" });
  }
};

const login = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    const user = await userModel.find({ email });

    if (user.length > 0) {
      const userdata = await userModel.find({ email });
      const token = jwt.sign({ userId: user[0]._id }, process.env.SECRET);
      res.send({
        msg: "login Sucessfully",
        token: token,
        data: {
          userEmail: userdata[0].email,
          userName: userdata[0].name,
        },
      });
    } else {
      res.status(404).send({ msg: "You are not Authorized. Please signup first" });
    }
  } catch (err) {
    res.send({ msg: "Something went wrong" });
  }
};

module.exports = {
  register,
  login,
};
