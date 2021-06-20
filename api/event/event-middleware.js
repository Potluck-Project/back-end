const { JWT_SECRET } = require('../secrets/secret');
const jwt = require("jsonwebtoken");

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Token invalid" });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token required" });
  }
};

module.exports = {
  restricted
};