const db = require('../database/dbConfig.js');

module.exports = {
    get,
    getAll,
    addSleepData,
    getSleepDataByUser,
    updateSleepData,
    removeSleepData,
    getDuration,
    getAvgSleepData,
    getSleepScore,
};

function get(id){
    return db('sleep')
    .select( 'sleep.id', 'u.firstName', 'sleep.date', 'sleep.timeCreated', 'sleep.moodAfterSleep', 'sleep.sleepScore', 'sleep.moodBeforeSleep', 'sleep.sleepStart', 'sleep.sleepEnd', 'sleep.duration')
    .join('users as u', 'u.id', 'sleep.user_id')
    .where({user_id: id})
}

function getAll(){
    return db('sleep')
    .select( 'sleep.id', 'u.firstName', 'sleep.date', 'sleep.timeCreated', 'sleep.moodAfterSleep', 'sleep.sleepScore', 'sleep.moodBeforeSleep', 'sleep.sleepStart', 'sleep.sleepEnd', 'sleep.duration')
    .join('users as u', 'u.id', 'sleep.user_id');
}

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

function getDuration(duration) {
    const { sleepStart, sleepEnd } = duration
    return (new Date(sleepStart) - new Date(sleepEnd)) / 60 / 60 / 1000
}

function getSleepScore(sleepScore) {
    //console.log(sleepScore)

    const { duration, moodAfterSleep } = sleepScore
    return (moodAfterSleep + duration) / 2
}

async function getAvgSleepData(id) {
    let today = new Date();
    let sevenDays = new Date();
    sevenDays.setDate(sevenDays.getDate() - 6);
    today = dateFormat(today, 'yyyy-mm-dd');
    sevenDays = dateFormat(sevenDays, 'yyyy-mm-dd');
    const average = await db('sleep')
        .avg('duration as avgDuration')
        .avg('moodAfterSleep as postMood')
        .avg('moodBeforeSleep as preMood')
        .whereBetween('date', [sevenDays, today])
        .andWhere('user_id', id)
        .first();
    return {
        avgDuration: Math.round(average.avgDuration),
        postMood: Math.round(average.postMood),
        preMood: Math.round(average.preMood),
    }
}