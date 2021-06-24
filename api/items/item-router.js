const router = require('express').Router();
const Item = require('./item-model')
const {
    restricted,
  } = require("../event/event-middleware")


router.get('/', restricted, (req, res, next) => {
Item.find()
 .then((Items) => {
     res.json(Items)
 })
 .catch(next)
})

router.get('/:item_id', restricted, (req, res, next) => {
Item.findById(req.params.item_id)
 .then((item) => {
     res.json(item)
 })
 .catch(next)
})


router.post('/', restricted, (req, res, next) => {
Item.addItem(req.body, req.params.event_id)
 .then((item) => {
     if (!item) {
         res.status(404).json({ message: "Could not find item with given ID"})
     } else {
         res.status(201).json(item)
     }
 })
})

router.post('/:event_id', restricted, (req, res, next) =>{

})

router.delete('/', restricted, (req, res, next) => {

})









module.exports = router 