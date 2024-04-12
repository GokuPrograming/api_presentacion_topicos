const { Pool } = require('pg');
const db = new Pool({
    user:'migueldb',
    host: 'dpg-cocn847sc6pc73d3c2k0-a.oregon-postgres.render.com',
    database: 'topicos',
    password: 'bT431RW07azTCpEfAthZPQNtZxdHgR41',
    port: 5432,
    ssl: true
    // user:'migueldb',
    // host: '172.19.116.163',
    // database: 'topicos',
    // password: '123',
    // port: 5432,
    //esto es para render
   // ssl: true
});

module.exports = db;