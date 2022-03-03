require('dotenv').config();
module.exports  = {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    db: process.env.DATABASE_DB_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: "mysql",
}