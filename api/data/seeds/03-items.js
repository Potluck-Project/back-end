
exports.seed = function(knex) {
 
      return knex('items').insert([
        {item_id: 1,
           item_name: 'BBQ ribs'},

        {item_id: 2,
           item_name: 'French Fries'},

        {item_id: 3,
           item_name: 'Assortment of Drinks'}
           
      ]);
    }

