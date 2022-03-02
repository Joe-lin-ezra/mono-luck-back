module.exports = (sequelize, Sequelize) => {
    const Registration = sequelize.define("registration", {
        registerId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        phone: {
            type: Sequelize.STRING
        },
        lockerNo: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Registration;
};