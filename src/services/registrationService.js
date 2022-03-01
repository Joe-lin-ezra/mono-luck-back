const db = require('../models/index.js');

const isRegistered = async (phoneNumber) => {
    const registration = await db.registration.findOne({ 
        where: { 
            phone: phoneNumber
        }
    });
    return registration;
}

const findOrCreate = async (registration) => {
    const [user, created] = await db.registration.findOrCreate({
        where: {
            phone: registration.phoneNumber
        },
        default: {
            lockerNo: registration.priority
        }
    });
    return [user, created];
}

module.exports = {
    isRegistered,
    findOrCreate
}
