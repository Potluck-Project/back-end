exports.seed = function (knex) {
  return knex("event_items").insert([
    {
      event_item_id: 1,
      quantity: 3,
      item_id: 1,
      event_id: 1
    },
    {
      event_item_id: 4,
      quantity: 3,
      item_id: 2,
      event_id: 1
    },
    {
      event_item_id: 5,
      quantity: 3,
      item_id: 3,
      event_id: 1
    },

    {
      event_item_id: 2,
      quantity: 8,
      item_id: 2,
      event_id: 2
    },

    {
      event_item_id: 6,
      quantity: 8,
      item_id: 1,
      event_id: 2
    },

    {
      event_item_id: 7,
      quantity: 8,
      item_id: 3,
      event_id: 2
    },
    {
      event_item_id: 3,
      quantity: 5,
      item_id: 3,
      event_id: 3
    },
    {
      event_item_id: 8,
      quantity: 5,
      item_id: 1,
      event_id: 3
    },
    {
      event_item_id: 9,
      quantity: 5,
      item_id: 2,
      event_id: 3
    },
    {
      event_item_id: 10,
      quantity: 5,
      item_id: 1,
      event_id: 3
    },
  ]);
};
