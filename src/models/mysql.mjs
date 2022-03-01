import mysql2 from 'mysql2';
import { config } from '../configs/db.config.mjs'; 

var mysql = {
    pool: mysql2.createPool({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.db,
        connectionLimit : config.connectionLimit,
    }),
}

// mysql.pool.on('acquire', function (connection) {
//     console.log('Connection %d acquired', connection.threadId);
// });
// mysql.pool.on('connection', function (connection) {
//     connection.query('SET SESSION auto_increment_increment=1')
// });
// mysql.pool.on('enqueue', function () {
//     console.log('Waiting for available connection slot');
// });

export default mysql;