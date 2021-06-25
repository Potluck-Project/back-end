const db = require("../data/dbConfig");

function find() {
  return db("users");
}

function findBy(filter) {
  console.log(filter);
  return db("users").where(filter);
}

function findById(user_id) {
  return db("users").where({ user_id }).first();
}

async function findByUsername(username) {
  const user = await db("users").where({ username }).first();
  return user;
}

async function add(user) {
  console.log(user)
  const [user_id] = await db("users").insert(user, "user_id");
  console.log(user_id,{user_id})
  return findById( user_id );
}

module.exports = {
  find,
  findBy,
  findByUsername,
  findById,
  add,
};
