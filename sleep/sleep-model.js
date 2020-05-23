const db = require('../database/dbConfig.js');

module.exports = {
    addSleepData,
    getSleepDataByUser,
    updateSleepData,
    removeSleepData,
    getDuration,
    // getAvgSleepData,
    // getSleepScore,
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

function getDuration(id) {
    return db('sleep')
    .select('id', 'date', 'duration')
    .where('sleep.user_id', '=', id);
}

// async function getSleepScore(id) {
//     //console.log(sleepScore)
//     const [sleepScore] = await db('sleep')
//     .where({ "sleep.user_id": id, "sleep.duration": duration, "sleep.moodAfterSleep": moodAfterSleep})
//     const { duration, moodAfterSleep } = sleepScore
//     return (moodAfterSleep + duration) / 2
// }

// async function getAvgSleepData(id) {
//     let today = new Date();
//     let sevenDays = new Date();
//     sevenDays.setDate(sevenDays.getDate() - 6);
//     today = dateFormat(today, 'yyyy-mm-dd');
//     sevenDays = dateFormat(sevenDays, 'yyyy-mm-dd');
//     const average = await db('sleep')
//         .avg('duration as avgDuration')
//         .avg('moodAfterSleep as postMood')
//         .avg('moodBeforeSleep as preMood')
//         .whereBetween('date', [sevenDays, today])
//         .andWhere('user_id', id)
//         .first();
//     return {
//         avgDuration: Math.round(average.avgDuration),
//         postMood: Math.round(average.postMood),
//         preMood: Math.round(average.preMood),
//     }
// }