const db = require('../models/index.js');

const isRegistered = async (phoneNumber) => {
    const registration = await db.registrations.findOne({ 
        where: { 
            phoneNumber: phoneNumber
        }
    });
    return registration;
}

const findOrCreate = async (registration) => {
    const [user, created] = await db.registrations.findOrCreate({
        where: {
            phoneNumber: registration.phoneNumber
        },
        defaults: {
            priority: registration.priority
        }
    });
    return [user, created];
}

module.exports = {
    isRegistered,
    findOrCreate
}
