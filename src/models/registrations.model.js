module.exports = (sequelize, Sequelize) => {
    const Registrations = sequelize.define("registrations", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        phoneNumber: {
            allowNull: false,
            type: Sequelize.STRING(15)
        },
        priority: {
            allowNull: false,
            type: Sequelize.STRING(10)
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Registrations;
};