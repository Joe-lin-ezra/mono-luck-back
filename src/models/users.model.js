module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING(40)
        },
        cardId: {
            allowNull: false,
            unique : true ,
            type: Sequelize.STRING(10)
        },
        phoneNumber: {
            allowNull: false,
            unique : true ,
            type: Sequelize.STRING(15)
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Users;
};