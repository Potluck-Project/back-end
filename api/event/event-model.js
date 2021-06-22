const db = require("../data/dbConfig");

async function find() {
  const events = await db("events")
    .leftJoin("users as u", "events.event_organizer", "u.user_id")
    .select("events.*", "u.username as event_organizer");
  const users = await db("attendees as at")
    .leftJoin("users as u", "at.user_id", "u.user_id")
    .select("at.*", "u.user_id", "u.username", "u.email", "u.is_organizer");
  const items = await db("event_items").leftJoin(
    "items as i",
    "event_items.item_id",
    "i.item_id"
  );

  let grouped_events = {};

  for (let event of events) {
    event.attendees = [];
    event.items = [];
    grouped_events[event.event_id] = event;
  }

  let usernameObj = {};

  for (let user of users) {
    usernameObj[user.user_id] = user.username;
    let tempObj = {
      user_id: user.user_id,
      username: user.username,
      email: user.email,
      is_organizer: user.is_organizer,
      confirmed: user.confirmed,
    };

    grouped_events[user.event_id].attendees.push(tempObj);
  }

  for (let item of items) {
    item.from_user_name = usernameObj[item.from_user];
    grouped_events[item.event_id].items.push(item);
  }

  let finalData = [];

  for (let event in grouped_events) {
    finalData.push(grouped_events[event]);
  }

  return finalData;
 
}

// Previous Version
// function find() {
//   return db("events as e")
//     .leftJoin("event_items as ei", "ei.event_id", "e.event_id")
//     .leftJoin("attendees as a", "a.event_id", "e.event_id")
//     .leftJoin("users as u", "u.user_id", "a.user_id")
//     .leftJoin("items as i", "i.item_id", "ei.item_id" );
// }

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
