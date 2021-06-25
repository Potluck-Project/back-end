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

//eslint-disable-next-line
router.post('/', restricted, (req, res, next) => {
Item.addItem(req.body, req.params.item_id)
 .then((item) => {
     if (!item) {
         res.status(404).json({ message: "Could not find item with given ID"})
     } else {
         res.status(201).json(item)
     }
 })
})
//eslint-disable-next-line
router.post('/:event_id/:item_id', restricted, (req, res, next) =>{
const {item_id, event_id} = req.params
const {quantity} = req.body
Item.addItemToEvent(item_id, event_id, quantity)
.then((item) => {
res.status(201).json(item)
})
.catch(next)
})

router.delete('/:event_id', restricted, (req, res, next) => {
Item.rem(req.params.event_id, req.body)
.then((event)=> {
    if(!event){
        res.status(404).json({ message: "Could not find event with given ID" })
    }else{
        res.status(201).json(event)
    }
})
.catch(next)
})







module.exports = router 