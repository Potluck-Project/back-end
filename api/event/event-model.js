const db = require("../data/dbConfig");

async function find() {
  const events = await db("events")
    .leftJoin("users as u", "events.event_organizer", "u.user_id")
    .select("events.*", "u.username as event_organizer");
  const users = await db("attendees as at")
    .leftJoin("users as u", "at.user_id", "u.user_id")
    .select("at.*", "u.user_id", "u.username", "u.email")
  const items = await db("event_items as e").leftJoin(
    "items as i",
    "e.item_id",
    "i.item_id"
  ).leftJoin('user_brings as ub', 'ub.event_item_id', 'e.event_item_id')
  .leftJoin('users as u', 'u.user_id', 'ub.user_id')
  .select('e.*', 'i.*', 'u.username')

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


async function findBy(filter) {
  const events = db("events").where(filter);
  return events;
}

async function findById(event_id) {
 
  const event = await db("events").where({ event_id }).first();
  const attendees = await db("attendees")
    .where({ event_id })
    .leftJoin("users as u", "u.user_id", "attendees.user_id")
    .select("attendees.*", "u.username", "u.email")
  const item = await db("items as i")
  .leftJoin('event_items as e', "e.item_id", "i.item_id")
  .leftJoin('user_brings as ub', 'ub.event_item_id', 'e.event_item_id')
  .leftJoin('users as u', 'u.user_id', 'ub.user_id')
  .select('e.*', 'i.*', 'u.username')
  event.attendees = attendees;
  event.items = item;
  return event;
}

async function add(newInfo) {
  const [event_id] = await db("events").insert(newInfo,"event_id");
 
  return db('events').where({event_id}).first()
}

async function update(event_id, updatedInfo) {
  await db("events")
    .where({ event_id })
    .update(updatedInfo
    );
  return findById(event_id);
}

function remove(event_id) {
  return db("events").where({ event_id }).del();
}

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
};
