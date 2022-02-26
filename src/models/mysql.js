const mysql2 = require('mysql2/promise');
const config = require('../configs/config');

export default mysql = mysql2.createPool({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.db,
    connectionLimit : config.connectionLimit
});

