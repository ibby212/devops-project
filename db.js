const { Pool } = require('pg');
const dotenv = require('dotenv');

// Dynamically load the correct .env file based on the NODE_ENV variable
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.dev';
dotenv.config({ path: envFile });

// Connect to PostgreSQL
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

module.exports = pool;