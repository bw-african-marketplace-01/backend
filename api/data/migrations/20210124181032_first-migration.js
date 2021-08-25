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
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
}

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists('businesses')
    .dropTableIfExists('users')
}
