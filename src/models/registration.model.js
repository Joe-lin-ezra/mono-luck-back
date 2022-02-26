const mysql = require('./mysql');

export class Registration {
    Constructor() {
        this.phoneNumber;
        this.priority;
    }
    
    static create = (newRegistration, result) => {
        mysql.getConnection((err, conn) => {
            if(err) throw err;
            conn.query(`INSERT INTO REGISTRATION SET ?`, newRegistration, 
            (err) => {
                if(err) throw err;
            });
        });
    }

    static findByPhoneNumber = (phoneNumber, result) => {
        mysql.getConnection((err, conn) => {
            if(err) throw err;
            conn.query(`SELECT * FROM REGISTRATION WHERE phone=${ phoneNumber }`, 
            (err, res) => {
                if(err) throw err;
                result(null, res);
            });
        });
    }    
}