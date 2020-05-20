const db = require("../database/dbConfig");

module.exports = {
    find,
    getBy,
    create,
    findById,
    findByUsername,
    remove,
};

function find() {
    return db("users").select("id", "username", "password")
}

function getBy(filter) {
    return db("users").where(filter);
}

function create(user) {
    return db("users")
        .insert(user)
        .then(([id]) => getBy({ id }));
}

function findById(id) {
    return db("users")
        .where({ id })
        .first();
}


function findByUsername(id) {
    return db("users")
        .where({ id })
        .first();
}

function remove(id) {
    return db('users')
        .where({ id })
        .delete();
}