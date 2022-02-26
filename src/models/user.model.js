const mysql = require('./mysql');

export class User {
    Constructor() {
        this.name;
        this.cardId;
        this.phoneNumber;
    }

    static findById = (id, result) => {
        mysql.getConnection((err, conn) => {
            if (err) throw err;
            conn.query(`SELECT * FROM USER WHERE id=${id}`,
                (err, re) => {
                    if (err) throw err;
                    result(null, re);
                }
            );
        });
    }

    static findByName = (name, result) => { 
        mysql.getConnection((err, conn) => {
            if (err) throw err;
            conn.query(`SELECT * FROM USER WHERE userName=${name}`,
                (err, re) => {
                    if (err) throw err;
                    result(null, re);
                }
            );
        });
    }

    static findByPhoneNumber = (phoneNumber, result) => { 
        mysql.getConnection((err, conn) => {
            if (err) throw err;
            conn.query(`SELECT * FROM USER WHERE phone=${phoneNumber}`,
                (err, re) => {
                    if (err) throw err;
                    result(null, re);
                }
            );
        });
    }
}

module.exports = User;