module.exports = (sequelize, Sequelize) => {
    const Registrations = sequelize.define("registrations", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        priority: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Registrations;
};