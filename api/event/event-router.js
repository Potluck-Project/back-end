const router = require("express").Router();
const { restricted,
  //  validateEvent 
  } = require("./event-middleware");
const Event = require("./event-model");

router.get("/", restricted, (req, res, next) => {
  Event.find()
    .then((Events) => {
      res.json(Events);
    })
    .catch((err) => next(err));
});


module.exports = router