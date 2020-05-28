
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()

        tbl
        .string('username', 255)
        .notNullable()
        .unique()

        tbl.string('password', 255)
        .notNullable()

        tbl.string('firstName', 255)
        .notNullable()

        tbl.string('lastName', 255)
        .notNullable()

        tbl.timestamps(true, true); 
    })
};

exports.down = function(knex) {
    
    return knex.schema.dropTableIfExists('users')
};