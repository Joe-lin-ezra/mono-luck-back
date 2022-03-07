require('dotenv').config();
module.exports = {
    "development": {
        "host": process.env.DATABASE_HOST,
        "database": process.env.DATABASE_DB_NAME,
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "dialect": "postgres",
        "dialectOptions": {"ssl": {"require": true,"rejectUnauthorized": false}} 
    },
    "test": {
        "host": process.env.DATABASE_HOST,
        "database": process.env.DATABASE_DB_NAME,
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "dialect": "mysql"
    },
    "production": {
        "host": process.env.DATABASE_HOST,
        "database": process.env.DATABASE_DB_NAME,
        "username": process.env.DATABASE_USERNAME,
        "password": process.env.DATABASE_PASSWORD,
        "dialect": "mysql"
    }
};
