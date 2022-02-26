const mysql = require('./mysql');

export class Locker {
    Constructor() {
        this.encoding;
        this.userCardId;
    }

    static create = (Locker) => {
        mysql.getConnection((err, conn) => {
            if(err) throw err;
            conn.query(`SELECT * FROM USER JOIN LOCKER \
            ON USER.userCardId=LOCKER.userCardId\
            WHERE phoneNumber=${phoneNumber}`, 
            (err, re) => {
                if(err) throw err;
                result(null, re)
            });
        });
    }

    static findByPhoneNumber = (phoneNumber, result) => {
        mysql.getConnection((err, conn) => {
            if(err) throw err;
            conn.query(`SELECT * FROM USER JOIN LOCKER \
            ON USER.userCardId=LOCKER.userCardId\
            WHERE phoneNumber=${phoneNumber}`, 
            (err, re) => {
                if(err) throw err;
                result(null, re)
            });
        });
    }
}