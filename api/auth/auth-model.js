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
  const [user_id] = await db("users").insert(user, "user_id");
  return findById( user_id );
}

module.exports = {
  find,
  findBy,
  findByUsername,
  findById,
  add,
};
