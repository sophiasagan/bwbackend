exports.up = function (knex) {
  return knex.schema.createTable('sleep', tbl => {
    tbl.increments()
    tbl.date('date')
      .notNullable()
    tbl.timestamp('sleepStart')
      .notNullable()
      .defaultTo(knex.fn.now())
    tbl.timestamp('sleepEnd')
      .notNullable()
      .defaultTo(knex.fn.now())
    tbl.float('duration')
    tbl.integer('moodBeforeSleep')
    tbl.integer('moodAfterSleep')
    tbl.float('sleepScore')
    tbl
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('sleep')
}