
exports.up = function (knex, Promise) {
  return knex.schema.createTable('activities', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('frequency')
    table.string('level')
    table.integer('user_id')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('activities')
}
