const bcrypt = require("bcrypt");
const User = require("../models/user");

const login = (req, res) => {
  User.find({ email: req.body.email }).then((response) => {
    if (response.length) {
      bcrypt.compare(req.body.password, response[0].password, (err, result) => {
        if (result) {
          res.send({ success: true });
        } else if (!result) {
          res.status(401).send({ error: "Password doesn't match" });
        }
      });
    } else {
      res.status(401).send({ error: "User not found" });
    }
  });
};

const register = (req, res) => {
  bcrypt.hash(req.body.password, 8, (err, hash) => {
    const newUser = new User({ email: req.body.email, password: hash });
    newUser
      .save()
      .then((result) => {
        {
          if (result) {
            res.send({ success: true });
          }
        }
      })
      .catch((err) => res.status(401).send({ error: "User probably exists" }));
  });
};

module.exports = {
  register,
  login,
};
