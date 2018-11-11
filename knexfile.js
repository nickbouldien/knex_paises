const database = process.env.DATABASE_NAME || "test_knex_db";
const user = process.env.DATABASE_USER || "postgres";
const password = process.env.DATABASE_PASSWORD || "nick";

console.dir({
  "db ": "info",
  database,
  user,
  password,
});

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // port: process.env.DATABASE_PORT,
      // host: process.env.DATABASE_HOST,
      database,
      user,
      password,
    },
    // debug: true,
    // migrations: { tableName: 'knex_migrations' },
    // seeds: { tableName: './seeds' },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'postgresql',
    connection: {
      database: '____'
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN || 2,
      max: process.env.DATABASE_POOL_MAX || 5,
    }
  }
};


