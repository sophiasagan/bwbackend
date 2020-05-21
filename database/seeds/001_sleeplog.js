
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('sleep').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sleep').insert([
        {
          user_Id: 1,
          date: "04/21/2020",
          sleepStart: "April 21, 2020 021:15:00",
          sleepEnd: "April 22, 2020 07:15:00",
          duration: (new Date("April 22, 2020 07:15:00").getTime() - new Date("April 21, 2020 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 1,

          moodAfterSleep: 3,
          sleepScore: 7
        },

        {
          user_Id: 1,
          date: "04/22/2020",
          sleepStart: "April 22, 2020 021:15:00",
          sleepEnd: "April 23, 2020 07:15:00",
          duration: (new Date("April 23, 2020 07:15:00").getTime() - new Date("April 22, 2020 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 4,
          moodAfterSleep: 4,
          sleepScore: 5.5

        },


        {
          user_Id: 1,
          date: "April 21, 2020",
          sleepStart: "April 21, 2020 021:15:00",
          sleepEnd: "April 22, 2020 07:15:00",
          duration: (new Date("April 22, 2020 07:15:00").getTime() - new Date("April 21, 2020 021:15:00").getTime()) / 60 / 60 / 1000,
          moodBeforeSleep: 2,
          moodAfterSleep: 2
        },


        {
          user_Id: 2,
          date: "04/21/2020",
          sleepStart: "April 21, 2020 021:15:00",
          sleepEnd: "April 22, 2020 07:15:00",
          duration: (new Date("April 22, 2020 07:15:00").getTime() - new Date("April 21, 2020 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeSleep: 3,
          moodAfterSleep: 3,


        },


        {
          user_Id: 3,
          date: "April 21, 2020",
          sleepStart: "April 21, 2020 021:15:00",
          sleepEnd: "April 22, 2020 07:15:00",
          duration: (new Date("April 22, 2020 07:15:00").getTime() - new Date("April 21, 2020 021:15:00").getTime()) / 60 / 60 / 1000,

          moodBeforeSleep: 2,
          moodAfterSleep: 1,
          sleepScore: 3.8

        }
      ]);
    });
};