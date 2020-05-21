const db = require('../database/dbConfig.js');

module.exports = {
    addSleepData,
    getSleepDataByUser,
    updateSleepData,
    removeSleepData,
    getDuration,
    getAvgSleepData,
    getSleepScore,
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

function getDuration(sleep) {
    const { sleep_start, sleep_end } = sleep
    return (new Date(sleep_start) - new Date(sleep_end)) / 60 / 60 / 1000
}

function getSleepScore(sleep) {
    console.log(sleep)

    const { moodBeforeSleep, moodAfterSleep } = sleep
    return (moodAfterSleep + moodBeforeSleep) / 2
}

async function getAvgSleepData(id) {
    let today = new Date();
    let sevenDays = new Date();
    sevenDays.setDate(sevenDays.getDate() - 6);
    today = dateFormat(today, 'yyyy-mm-dd');
    sevenDays = dateFormat(sevenDays, 'yyyy-mm-dd');
    const average = await db('sleep')
        .avg('timeSlept as avgTimeSlept')
        .avg('moodAfterSleep as postMood')
        .avg('sleepMood as avgSleepMood')
        .whereBetween('date', [sevenDays, today])
        .andWhere('user_id', id)
        .first();
    return {
        avgTimeSlept: Math.round(average.avgTimeSlept),
        postMood: Math.round(average.postMood),
        avgSleepMood: Math.round(average.avgSleepMood),
    };
}