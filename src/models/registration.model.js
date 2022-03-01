import mysql from './mysql.mjs';
const pool = mysql.pool;

export class Registration {
    Constructor() {
        this.phoneNumber;
        this.priority;
    }
    
    static create = (newRegistration) => {
        // return new Promise((resolve, reject) => {
        //     promisePool.getConnection()
        //     .then((connection) => {
        //         let id  = connection.query(`INSERT INTO REGISTRATION\
        //          (phone, lockerNo)\ 
        //          VALUES (${newRegistration.phoneNumber}, ${newRegistration.priority})`);
        //         connection.release();
        //         return id;
        //     })
        //     .then(id => resolve(id))
        //     .catch(err => reject(err));
        // });
    }

    findByPhoneNumber = async (phoneNumber, callback) => {
        pool.getConnection((err, connection) => {
            if(err) {
                callback(err, null);
                return;
            }
            connection.query(`SELECT * FROM REGISTRATION WHERE phone=${phoneNumber}`,
            (err, rows) => {
                callback(err, rows);
            });
            connection.release();
        });
    }    
}