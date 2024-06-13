const dotenv = require('dotenv').config()
console.log(dotenv.error) 

const mysql = require('mysql2')

// const db = mysql.createPool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
// });

const db = mysql.createPool({
    host: 'monorail.proxy.rlwy.net',
    port: '46885',
    user: 'root',
    password: 'jFOBxBwLuPcMCrHgLdOEHjIqSOmIYCMX',
    database: 'railway',
});


module.exports = db;
