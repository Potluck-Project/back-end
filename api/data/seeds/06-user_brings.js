exports.seed = function (knex) {
  return knex("user_brings").insert([
    
    { user_brings_id: 3, event_item_id: 1, user_id: 3 },
  ]);
};
