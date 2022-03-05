const db = require('../models/index.js');

const isRegistered = async (phone) => {
    const registration = await db.registrations.findOne({ 
        where: { 
            phone: phone
        }
    });
    return registration;
}

const findOrCreate = async (registration) => {
    const [user, created] = await db.registrations.findOrCreate({
        where: {
            phone: registration.phone
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
