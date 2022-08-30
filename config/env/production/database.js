// path: ./config/env/production/database.js

const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: iqcclhmrsgsdgo,
      password: '8a0f5a94b6d33a3eb43407e77ab4538c00d4d4bcb26d748d02a69fdfc143e9cf',
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
    debug: false,
  },
});
