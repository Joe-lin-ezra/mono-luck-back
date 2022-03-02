module.exports = (sequelize, Sequelize) => {
    const Locker = sequelize.define("locker", {
        lockerNo: {
            type: Sequelize.STRING
        },
        lockerEncoding: {
            type: Sequelize.STRING
        },
        userCardId: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        },
        updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    });
    return Locker;
};