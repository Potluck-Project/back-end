const db = require("../data/dbConfig");

function find() {
  return db("users");
}

function findBy(filter) {
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
  console.log("ADD ACTIVE");
  const user_id = await db("users").insert(user);
  console.log("USER_ID", user_id);
  return findByUsername(user.username);
}

module.exports = {
  find,
  findBy,
  findById,
  add,
};
