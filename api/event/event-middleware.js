const { JWT_SECRET } = require("../../secret/index");
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

const validateEvent = (req, res, next) => {
    req.body = req.body.trim()
  if (!req.body.event_name === ""|| req.body.event_name === undefined) {
    res.status(401).json({ message: "Event name can not be undefined" });
  } else if (!req.body.event_date === "" || req.body.event_date === undefined) {
    res.status(401).json({ message: "Event date can not be undefined" });
  } else if (!req.body.event_time === "" || req.body.event_time === undefined) {
    res.status(401).json({ message: "Event time can not be undefined" });
  } else if (!req.body.event_state === "" || req.body.event_state === undefined) {
    res.status(401).json({ message: "Event state can not be undefined" });
  } else if (!req.body.event_city === "" || req.body.event_city === undefined) {
    res.status(401).json({ message: "Event city can not be undefined" });
  } else if (!req.body.event_zip === "" || req.body.event_zip === undefined) {
    res.status(401).json({ message: "Event zip can not be undefined" });
  } else {
    next();
  }
};

module.exports = {
  restricted,
  validateEvent,
};
