module.exports = (sequelize, Sequelize) => {
    const Registration = sequelize.define("lockerRegistration", {
        phoneNumber: {
            type: Sequelize.STRING
        },
        priority: {
            type: Sequelize.STRING
        },
        createdAt: {
            type: Sequelize.DATE,
            allowNull: false
        }
    }, {
        updatedAt: false
    });
    return Registration;
};