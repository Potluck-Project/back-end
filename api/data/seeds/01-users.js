const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  
 
      return knex('users').insert([
        {user_id: 1, 
          username: 'rowValue1',
           email: "mike1@gmail.com", 
           password:bcrypt.hashSync("password",8),
           is_organizer:false},
           
        {user_id: 2, 
          username: 'rowValue2',
           email: "mike2@gmail.com", 
           password:bcrypt.hashSync("password",8),
           is_organizer:false},
           
        {user_id: 3, 
          username: 'rowValue3',
           email: "mike3@gmail.com", 
           password:bcrypt.hashSync("password",8),
           is_organizer:false}

          ]);
    }

