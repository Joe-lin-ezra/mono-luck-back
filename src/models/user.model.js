import mysql from './mysql.mjs';
const pool = mysql.pool;

export class User {
    Constructor() {
        this.name;
        this.cardId;
        this.phoneNumber;
    }

    // static findById = (id) => {
    //     return new Promise((resolve, reject) => {
    //         promisePool.getConnection()
    //         .then((connection) => {
    //             let rows  = connection.query(`SELECT * FROM USER WHERE id=${id}`);
    //             connection.release();
    //             return rows;
    //         })
    //         .then(rows => resolve(rows))
    //         .catch(err => reject(err));
    //     });
    // }

    // static findByName = (name) => { 
    //     return new Promise((resolve, reject) => {
    //         pool.getConnection()
    //         .then((connection) => {
    //             let rows  = connection.query(`SELECT * FROM USER WHERE userName=${name}`);
    //             connection.release();
    //             return rows;
    //         })
    //         .then(rows => resolve(rows))
    //         .catch(err => reject(err));
    //     });
    // }

    findByPhoneNumber = async (phoneNumber, callback) => {
        const result = pool.query('SELECT * FROM USER WHERE phone=0999999999');
        // {
        //     if (err) {
        //         callback(err, null);
        //         return;
        //     }
        //     const row = connection.query(`SELECT * FROM USER WHERE phone=${phoneNumber}`, (err, rows) => {
        //         // callback(err, rows);
        //         console.log(rows)
        //         return rows;
        //     });
        //     connection.release();
        //     return row
        // });
        return result;
    }
}

const user = new User();
const result = await user.findByPhoneNumber('12345567890').then((row) => {return row})
console.log(result);