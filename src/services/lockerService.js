const db = require('../models/index.js');

const findLockerByUserCardId = async (userCardId) => {
    const locker = await db.locker.findOne({
        where: { 
            userCardId: userCardId,
        }
    });
    return locker;
}

module.exports = {
    findLockerByUserCardId
}
