module.exports = (sequelize, Sequelize) => {
    const Lockers = sequelize.define("lockers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        lockerNo: {
            allowNull: false,
            unique : true ,
            type: Sequelize.STRING(2)
        },
        lockerEncoding: {
            allowNull: false,
            type: Sequelize.STRING(20)
        },
        cardId: {
            type: Sequelize.STRING(10)
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Lockers;
};