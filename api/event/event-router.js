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
    .catch(next);
});

router.get("/:event_id", restricted, (req, res, next) => {
  console.log(req.params);
  Event.findById(req.params.event_id)

    .then((event) => {
      res.json(event);
    })
    .catch(next);
});



router.delete("/:event_id", restricted, (req, res, next) => {
  Event.remove(req.params.event_id)
    .then(() => {
      res.json({ message: "Event has been deleted" });
    })
    .catch(next);
});

router.post("/", restricted, (req, res, next) => {
  Event.add(req.body)
    .then((addEvent) => {
      res.status(201).json(addEvent);
    })
    .catch(next);
});

router.put("/:event_id", restricted, (req, res, next) => {
  Event.update(req.params.event_id, req.body)
    .then((event) => {
      if (!event) {
        res.status(404).json({ message: "Could not find event with given ID" });
      } else {
        res.status(201).json(event);
      }
    })
    .catch(next);
});

//!  MIDDLEWARE TO VERIFY KEYS
//!  IF USER PUTS IN SAN FANSCICO INSTEAD OF SAN FRANCISCO

module.exports = router;
