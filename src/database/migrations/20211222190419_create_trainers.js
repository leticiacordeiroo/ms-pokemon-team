
exports.up = function (knex) {
  return knex.schema.createTable('trainers', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('trainers')
}
