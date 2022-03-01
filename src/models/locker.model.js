import mysql from './mysql.mjs';
const pool = mysql.pool;

export class Locker {
    Constructor() {
        this.encoding;
        this.userCardId;
    }

    static create(Locker) {
        // return new Promise((resolve, reject) => {
        //     promisePool.getConnection()
        //     .then((connection) => {
        //         let rows  = connection.query(`INSERT INTO () VALUES $`);
        //         connection.release();
        //         return rows;
        //     })
        //     .then(rows => resolve(rows))
        //     .catch(err => reject(err));
        // });
    }

    static findByPhoneNumber(phoneNumber, callback) {
        pool.getConnection((err, connection) => {
            if(err) {
                callback(err, null);
                return;
            }
            connection.query(
                `SELECT * FROM USER JOIN LUCKER \
                ON USER.userCardId=LUCKER.userCardId\
                WHERE phone=${phoneNumber}`, (err, rows) => {
                    callback(err, rows);
                });
                connection.release();
        });
    }
}