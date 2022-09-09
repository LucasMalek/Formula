
require('dotenv').config();
const pgp = require('pg-promise')();

const db = pgp({
    user: 'postgres',
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: 'formula',
})


module.exports = db;
