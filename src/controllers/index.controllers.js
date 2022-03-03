const db = require('../models/index.js');
const userService = require('../services/userService.js');
const registrationService = require('../services/registrationService.js');
const lockerService = require('../services/lockerService.js');

registerLocker = async (req, res) => {
    try {
        const phoneNumber = req.body.phoneNumber;

        const checkUser = await userService.isSubscriber(phoneNumber);
        if(!checkUser) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }

        const [user, created] = await registrationService.findOrCreate(req.body);
        if(!created) {
            return res.status(403).json({ message: '您已登記過鎖櫃!'});
        }
        else {
            return res.status(201).json(user);
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

searchLockerLottery = async (req, res) => {
    try {
        const phoneNumber = req.query.phoneNumber;

        const user = await userService.isSubscriber(phoneNumber);
        if(!user) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }
        
        const { cardId } = await userService.getUserCardIdByPhoneNumber(phoneNumber);
        const locker = await lockerService.findLockerByUserCardId(cardId);
        if(locker) {
            return res.status(200).json({ message: '您抽中的鎖櫃為 - '+
            locker.dataValues.lockerNo+' 號('+locker.dataValues.lockerEncoding+') 請向工作人員索取使用登記表簽名'});
        }

        const registration = await registrationService.isRegistered(phoneNumber);
        if(registration) {
            //just for demo
            return res.status(200).json({ message: '目前鎖櫃尚在登記中， 請在 12/12 AM 10 回來本系統查看中籤資訊'});
        }
        else {
            return res.status(404).json({ message: '您還沒登記鎖櫃!'});
        }

        
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports = {
    registerLocker,
    searchLockerLottery,
}