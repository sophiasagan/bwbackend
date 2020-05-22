
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sleep').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        {
          user_Id: 1,
          date: "2020-04-21",
          sleepStart: "2020-04-21 21:15:00.000",
          sleepEnd: "2020-04-22 07:15:00.000",
          duration: (new Date("2020-04-22 07:15:00.000").getTime() - new Date("2020-04-21 21:15:00.000").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 1,
          moodAfterSleep: 3,
          sleepScore: 7
        },

        {
          user_Id: 1,
          date: "2020-04-22",
          sleepStart: "2020-04-22 021:15:00.000",
          sleepEnd: "2020-04-23 07:15:00",
          duration: (new Date("2020-04-23 07:15:00.000").getTime() - new Date("2020-04-22 021:15:00.000").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 4,
          moodAfterSleep: 4,
          sleepScore: 5.5

        },


        {
          user_Id: 1,
          date: "2020-04-21",
          sleepStart: "2020-04-21 21:15:00.000",
          sleepEnd: "2020-04-22 07:15:00.000",
          duration: (new Date("2020-04-22 07:15:00.000").getTime() - new Date("2020-04-21 21:15:00.000").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 2,
          moodAfterSleep: 2
        },


        {
          user_Id: 2,
          date: "2020-04-21",
          sleepStart: "2020-04-21 21:15:00.000",
          sleepEnd: "2020-04-22 07:15:00.000",
          duration: (new Date("2020-04-22 07:15:00.000").getTime() - new Date("2020-04-21 21:15:00.000").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 3,
          moodAfterSleep: 3,


        },


        {
          user_Id: 4,
          date: "2020-04-21",
          sleepStart: "2020-04-21 21:15:00.000",
          sleepEnd: "2020-04-22 07:15:00.000",
          duration: (new Date("2020-04-22 07:15:00.000").getTime() - new Date("2020-04-21 21:15:00.000").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 2,
          moodAfterSleep: 1,
          sleepScore: 3.8

        }
      ]);
    });
};