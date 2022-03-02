module.exports = (sequelize, Sequelize) => {
    const Registration = sequelize.define('registration', {
        phoneNumber: {
            type: Sequelize.STRING,
            references: 'user',
            referencesKey: 'phoneNumber'
        },
        priority: {
            type: Sequelize.STRING
        }
    });
    return Registration;
};