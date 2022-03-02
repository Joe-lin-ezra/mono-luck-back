const db = require('../models/index.js');

const isSubscriber = async (phoneNumber) => {
    const user = await db.users.findOne({
        where: {
            phoneNumber: phoneNumber
        }
    });
    // console.log(user)
    return user;
}

const getUserCardIdByPhoneNumber = async (phoneNumber) => {
    const user = await db.users.findOne({
        where: {
            phoneNumber: phoneNumber
        }
    });
    return user.dataValues;
}

module.exports = {
    isSubscriber,
    getUserCardIdByPhoneNumber
}