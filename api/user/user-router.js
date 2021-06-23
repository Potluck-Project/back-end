const router = require("express").Router();
const User = require("./user-model");

router.get("/", (req, res, next) => {
  User.find()
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});

router.get("/:user_id", (req, res, next) => {
  User.findById(req.params.user_id)
    .then((user) => {
      res.json(user);
    })
    .catch(next);
});


router.post("/", (req, res, next) => {
User.addToEvent(req.body)
.then(user => {
  res.json(user)
})
.catch(next);
})

router.post("/:attendees_id", (req, res, next) => {
User.addForconfirm(req.params)
.then(user => {
  res.json(user)
})
.catch(next);
})


module.exports = router;
