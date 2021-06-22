const db = require("../data/dbConfig");

function find() {
  return db("events as e")
    .leftJoin("attendees as a", "a.event_id", "e.event_id")
    .leftJoin("users as u", "u.user_id", "a.user_id")
    .leftJoin("", "")
}

function findBy(filter) {
  return db("events");
}

function findById(event_id) {
  return db("events");
}

function add() {
  return db("events");
}

module.exports = {
  add,
  find,
  findBy,
  findById,
};
