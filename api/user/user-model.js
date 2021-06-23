const db = require("../data/dbConfig");

async function find() {
  const users = await db("users").select("user_id", "username", "email");
  return users;
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(user_id) {
  return db("users")
    .where({ user_id })
    .select("user_id", "username", "email")
    .first();
}

//! BELOW SIGNIFIES FOR ORGANIZER/POTLUCK PLANNER ! 
async function addToEvent(newGuests) {
  const [attendees_id] = await db("attendees").insert(
    newGuests,
    "attendees_id"
  );
  return db("attendees").where({ attendees_id }).first();
}
//! BELOW SIGNIFIES FOR ATTENDEE/GUEST ! 
async function addForconfirm(attendees_id) {
  const a = { attendees_id: parseInt(attendees_id.attendees_id) };
  await db("attendees").where(a).update("confirmed", true);
  return db("attendees").where(a).first();
}

module.exports = {
  find,
  findBy,
  findById,
  addToEvent,
  addForconfirm,
};
