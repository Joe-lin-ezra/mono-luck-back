module.exports = (sequelize, Sequelize) => {
    const Lockers = sequelize.define("luckers", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lockerEncoding: {
            type: Sequelize.STRING
        },
        cardId: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Lockers;
};