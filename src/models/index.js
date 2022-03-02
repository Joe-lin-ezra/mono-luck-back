const config = require("../configs/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.db,
    config.user,
    config.password,
    {
        host: config.host,
        dialect: config.dialect,
    }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.locker = require("./locker.model.js")(sequelize, Sequelize);
db.lockerRegistration = require("./lockerRegistration.model.js")(sequelize, Sequelize);

module.exports = db;