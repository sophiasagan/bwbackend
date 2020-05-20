// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: "./database/sleeptracker.db3",
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done)
      },
    },

    testing: {
      client: 'sqlite3',
      connection: {
        filename: './data/sleeptracker-test.db3'
      },
      useNullAsDefault: true,
      migrations: {
        directory: './database/migrations',
      },
      seeds: {
        directory: './database/seeds'
      }
    },

    production: {
      client: 'sqlite3',
      connection: { filename: './database/sleeptracker.db3' },
      migrations: {
        directory: './database/migrations',
      },
      seeds: { directory: './database/seeds' },
      useNullAsDefault: true
    }
  }
};