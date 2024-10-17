import 'dotenv/config';
import postgres from 'postgres';

let { PGHOST, PGDATABASE, PGCARROSRAPIDOS, PGPASSWORD } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGCARROSRAPIDOS,
  password: PGPASSWORD,
  port: 5432,
  ssl: false,
});

export { sql };