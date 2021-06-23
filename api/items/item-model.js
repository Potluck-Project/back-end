const db = require("../data/dbConfig");

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

async function addItem(){
const [item_id] = await db("items")
}

async function addItemToEvent(event_id){

}

function removeItemFromEvent(){

}

module.exports = {
    find,
    findBy,
    findById,
    addItem,
    addItemToEvent,
    removeItemFromEvent,
}