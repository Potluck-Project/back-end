
exports.seed = function(knex) {
  
      return knex('attendees').insert([
        {attendees_id: 1,
           is_guest:true,
           confirmed:true,
           user_id:1,
           event_id:2
          },

        {attendees_id: 2,
           is_guest:false,
           confirmed:false,
          user_id:2, 
          event_id:1
          },

        {attendees_id: 3,
           is_guest:false,
           confirmed:true,
          user_id:3, 
          event_id:3
          }
      ]);
    }
