const db = require('../models/index.js');

const findLockerByUserCardId = async (cardId) => {
    const locker = await db.lockers.findOne({
        where: { 
            cardId: cardId,
        }
    });
    return locker;
}

module.exports = {
    findLockerByUserCardId
}
