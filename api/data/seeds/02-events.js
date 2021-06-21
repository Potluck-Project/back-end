
exports.seed = function(knex) {
  
      return knex('events').insert([
        {event_id: 1,
          event_name:'potluck',
          event_date:"11/12/2021",
          event_time: "3:30 PM",
          event_state:"NY",
          event_city:"NYC",
          event_zip:"12345",
          event_street_address:"123-23 40th street"},

        {event_id: 2,
           event_name:'potluck',
           event_date:"11/13/2021",
           event_time: "3:30 PM",
           event_state:"FL",
           event_city:"Orlando",
           event_zip:"12344",
           event_street_address:"123-900 La Playa Blvd."},

        {event_id: 3,
           event_name:'potluck',
           event_date:"11/14/2021",
           event_time: "3:30 PM",
           event_state:"CA",
           event_city:"San Francisco",
           event_zip:"12121",
           event_street_address:"20-20 won street"}
      ]);
    }

