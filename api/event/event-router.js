const router = require("express").Router();
const {
  restricted,
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

router.get("/:event_id", restricted, (req, res, next) => {
  console.log(req.params);
  Event.findById(req.params.event_id)

    .then((event) => {
      res.json(event);
    })
    .catch(next);
});

router.get("/:event_key/:condition", (req, res,next) => {
  let str = req.params.condition.split("_").join(" ");
  const matchingObj = {
    [req.params.event_key]: str
  };
  Event.findBy(matchingObj)
    .then((eventObj) => res.json(eventObj))
    .catch(next);
});

//!  MIDDLEWARE TO VERIFY KEYS 
//!  IF USER PUTS IN SAN FANSCICO INSTEAD OF SAN FRANCISCO

module.exports = router;
