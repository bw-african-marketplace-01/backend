exports.up = async (knex) => {
  await knex.schema
    .createTable('users', (users) => {
      users.increments('user_id')
      users.string('username', 200).notNullable()
      users.string('password', 200).notNullable()
      users.timestamps(false, true)
    })
    .createTable('businesses', (tbl) => {
      tbl.increments('business_id')
      tbl.string('name', 32)
      tbl.integer('owner_id')
          .unsigned()
          .notNullable()
          .references('user_id')
          .inTable('users')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
    .createTable('items', (tbl) => {
      tbl.increments('item_id')
      tbl.string('category', 64).notNullable()
      tbl.string('location', 128).notNullable()
      tbl.string('name', 128).notNullable()
      tbl.string('description', 256).notNullable()
      tbl.integer('price').unsigned().notNullable()
      tbl.integer('business_id')
          .unsigned()
          .notNullable()
          .references('business_id')
          .inTable('businesses')
          .onUpdate('CASCADE')
          .onDelete('CASCADE')
    })
    
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('businesss_items')
    .dropTableIfExists('items')
    .dropTableIfExists('businesses')
    .dropTableIfExists('users')
}
