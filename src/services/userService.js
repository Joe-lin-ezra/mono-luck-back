const db = require('../models/index.js');

const isSubscriber = async (phone) => {
    const user = await db.user.findOne({
        where: {
            phone: phone
        }
    });
    // console.log(user)
    return user;
}

const getUserCardIdByPhoneNumber = async (phone) => {
    const user = await db.user.findOne({
        where: {
            phone: phone
        }
    });
    return user.dataValues;
}

module.exports = {
    isSubscriber,
    getUserCardIdByPhoneNumber
}