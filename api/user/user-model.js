const db = require("../data/db-config");


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