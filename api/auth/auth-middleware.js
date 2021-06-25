const User = require("../auth/auth-model");
const bcrypt = require("bcryptjs");

const checkUserNameExists = (req, res, next) => {
  const { username } = req.body;

  User.findBy({ username }).then(([user]) => {
    if (user) {
      res.status(401).json({ message: "username taken" });
    } else {
      next();
    }
  });
};

const checkUserName = (req, res, next) => {
  const { username, password } = req.body;
  User.findBy({ username }).then(([user]) => {
    console.log("HEY RIGHT HERE!",user,user.password,user.username)
    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  });
};

const validateBody = (req, res, next) => {
  const { username } = req.body;
  
    if (username === undefined || username.trim() === "") {
     res.status(401).json({ message: "Create a username..."})
    } else {
    //   req.body.username = username.trim();
      next();
    }
 
  
};

module.exports = {
  checkUserNameExists,
  checkUserName,
  validateBody,
};
