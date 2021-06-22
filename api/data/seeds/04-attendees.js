exports.seed = function (knex) {
  return knex("attendees").insert([
    {
      attendees_id: 1,
      confirmed: true,
      user_id: 1,
      event_id: 2,
    },

    {
      attendees_id: 2,
      confirmed: false,
      user_id: 2,
      event_id: 1,
    },
    {
      attendees_id: 6,
      confirmed: false,
      user_id: 2,
      event_id: 2,
    },
    {
      attendees_id: 7,
      confirmed: false,
      user_id: 2,
      event_id: 3,
    },
    {
      attendees_id: 8,
      confirmed: true,
      user_id: 3,
      event_id: 1,
    },
    {
      attendees_id: 9,
      confirmed: true,
      user_id: 3,
      event_id: 2,
    },
  ]);
};
