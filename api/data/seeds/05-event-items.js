exports.seed = function (knex) {
  return knex("event_items").insert([
    {
      event_item_id: 1,
      quantity: 3,
      item_id: 1,
      event_id: 1
    },
    
  ]);
};
