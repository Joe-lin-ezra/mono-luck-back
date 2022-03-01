import mysql2 from 'mysql2';
import { config } from './configs/db.config.mjs';

const pool = mysql2.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'remote',
    password: 'remote',
    database:'mono'
});
let n = '0999999999'
pool.getConnection((err, connection) => {
    if(err) throw err;
    connection.query(`select * from USER where phone=${n}`, (err, rows) => {console.log(err, rows);});
    connection.release();
});
