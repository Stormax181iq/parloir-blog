require("dotenv").config();
const { Pool } = require("pg");

const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;

const db = new Pool({
  host: PG_HOST,
  port: PG_PORT || 5432,
  user: PG_USER,
  password: PG_PASSWORD,
  database: PG_DATABASE,
});

module.exports = db;
