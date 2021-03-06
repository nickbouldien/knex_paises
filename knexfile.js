const database = process.env.DATABASE_NAME || "";
const user = process.env.DATABASE_USER || "";
const password = process.env.DATABASE_PASSWORD || "";

const DEBUG = process.env.NODE_ENV !== "production";

console.dir({
  knexfile_data: "info",
  database,
  user,
  password,
});

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // port: process.env.DATABASE_PORT,
      // host: process.env.DATABASE_HOST,
      database,
      user,
      password,
    },
    debug: DEBUG,
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "postgresql",
    connection: {
      database: process.env.DATABASE_CONNECTION_STRING || "",
    },
    pool: {
      min: process.env.DATABASE_POOL_MIN || 2,
      max: process.env.DATABASE_POOL_MAX || 5,
    },
  },
};
