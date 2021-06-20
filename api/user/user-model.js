const db = require("../data/dbConfig");


async function find(){
    const users = await db('users')
    return users
}


















module.exports = {
//   add,
  find,
//   findBy,
//   findById,
};