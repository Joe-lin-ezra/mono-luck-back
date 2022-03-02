const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    process.env.DATABASE_DB_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        host: process.env.DATABASE_HOST,
        dialect: 'mysql',
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.locker = require("./locker.model.js")(sequelize, Sequelize);
db.registration = require("./registration.model.js")(sequelize, Sequelize);

module.exports = db;