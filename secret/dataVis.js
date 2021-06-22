let obj = {
  event_id: 1,
  event_name: "potluck NYC",
  event_date: "11/12/2021",
  event_time: "3:30 PM",
  event_state: "NY",
  event_city: "NYC",
  event_zip: "12345",
  event_street_address: "123-23 40th street",
  event_organizer: 1,
  event_item_id: 1,
  organizer: {
    user_id: 1,
    username: "Adam",
  },
  attendees: [
    {
      user_id: 3,
      username: "Ryan",
      confirmed: true,
      is_organizer: true,
    },
    {
      user_id: 4,
      username: "Gavin",
      confirmed: false,
      is_organizer: false,
    },
  ],
  items: [
    {
      item_id: 1,
      item_name: "Coke",
      quantity: 3,
      from_user: "Ryan",
    },
    {
      item_id: 2,
      item_name: "Popcorn",
      quantity: 4,
      from_user: "Adam",
    },
  ],
};
