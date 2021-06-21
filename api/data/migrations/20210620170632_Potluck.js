
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
      tbl.increments('user_id')
      tbl.string('username',128).notNullable().unique()
      tbl.string('email',128).notNullable().unique()
      tbl.string('password',128).notNullable()
      tbl.boolean('is_organizer').defaultTo(false)
  })
  .createTable('events', tbl => {
      tbl.increments('event_id')
      tbl.string('event_name',128).notNullable()
      tbl.string('event_date',128).notNullable()
      tbl.string('event_time',128).notNullable()
      tbl.string('event_state',128).notNullable()
      tbl.string('event_city',128).notNullable()
      tbl.string('event_zip',128).notNullable()
      tbl.string('event_street_address',128).notNullable()
  })
  .createTable('items', tbl => {
      tbl.increments('item_id')
      tbl.string('item_name').notNullable()
  })
  .createTable('attendees', tbl => {
      tbl.increments('attendees_id')
      tbl.boolean('is_guest').notNullable().defaultTo(false)
      tbl.boolean('confirmed').notNullable().defaultTo(false)
      tbl.integer('user_id')
      .notNullable()
      .unsigned()
      .references('user_id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      tbl.integer('event_id')
      .notNullable()
      .unsigned()
      .references('event_id')
      .inTable('events')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
  .createTable('event_items', tbl => {
      tbl.increments('event_item_id')
      tbl.integer('quantity').notNullable()
      tbl.integer('item_id')
      .notNullable()
      .unsigned()
      .references('item_id')
      .inTable('items')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      tbl.integer('event_id')
      .notNullable()
      .unsigned()
      .references('event_id')
      .inTable('events')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("event_items")
  .dropTableIfExists("attendees")
  .dropTableIfExists("items")
  .dropTableIfExists("events")
  .dropTableIfExists("users")
};
