const db = require('../database/dbConfig.js');

module.exports = {
  addSleepData,
  getSleepDataByUser,
  updateSleepData,
  removeSleepData,
};


async function addSleepData(data) {
  const [id] = await db('sleep').insert(data, 'id');

  return getSleepDataByUser(id);
}

function getSleepDataByUser(id) {
  return db('sleep').where({ 'sleep.user_id': id });
}

function updateSleepData(id, changes) {
  return db('sleep')
    .where({ id })
    .update(changes);
}

function removeSleepData(id) {
  return db('sleep')
    .where({ id })
    .delete();
}