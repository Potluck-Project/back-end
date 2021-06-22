const db = require("../data/dbConfig");


    async function find(){
    const users = await db('users')
    return users
    }
    
    function findBy(filter){
    return db('users').where(filter)
    }
    
    function findById(user_id){
    return db('users').where({user_id}).first()
    }
    
    module.exports = {
        find,
        findBy,
        findById,
    }

















