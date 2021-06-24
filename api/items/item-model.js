const db = require("../data/dbConfig");
const Event = require('../event/event-model')

 function find() {
     return db('items')
}

function findBy(filter){
return db('items').where(filter)
}

function findById(item_id){
return db("items")
.where({item_id})
.first()
}

async function addItem(newItem){
 const [item_id] = await db("items").insert(newItem, "item_id")

 return db('items').where({item_id}).first()
}

async function addItemToEvent(event_id){



}

function removeItemFromEvent(event_id){
return db("event_items").where({event_id}).del()
}

module.exports = {
    find,
    findBy,
    findById,
    addItem,
    addItemToEvent,
    removeItemFromEvent,
}