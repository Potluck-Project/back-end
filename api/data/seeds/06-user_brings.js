exports.seed = function (knex) {
  return knex("user_brings").insert([
    { user_brings_id: 1, event_item_id: 2, user_id: 1 },
    { user_brings_id: 2, event_item_id: 3, user_id: 2 },
    { user_brings_id: 3, event_item_id: 1, user_id: 3 },
  ]);
};
