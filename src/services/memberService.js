const db = require('../models/index.js');

const isSubscriber = async (phoneNumber) => {
    const member = await db.members.findOne({
        where: {
            phoneNumber: phoneNumber
        }
    });
    return member;
}

const getMemberCardIdByPhoneNumber = async (phoneNumber) => {
    const member = await db.members.findOne({
        where: {
            phoneNumber: phoneNumber
        }
    });
    return member.dataValues;
}

module.exports = {
    isSubscriber,
    getMemberCardIdByPhoneNumber
}