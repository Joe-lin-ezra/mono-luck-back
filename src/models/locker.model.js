module.exports = (sequelize, Sequelize) => {
    const Locker = sequelize.define("lucker", {
        luckerId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        luckerEncoding: {
            type: Sequelize.STRING
        },
        userCardId: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false
    });
    return Locker;
};