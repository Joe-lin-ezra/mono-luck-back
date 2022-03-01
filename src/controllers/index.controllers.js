const db = require('../models/index.js');
const userService = require('../services/userService.js');
const registrationService = require('../services/registrationService.js');
const lockerService = require('../services/lockerService.js');

registerLocker = async (req, res) => {
    try {
        console.log(req.body)
        const phoneNumber = req.body.phoneNumber;

        const checkUser = await userService.isSubscriber(phoneNumber);
        if(!checkUser) {
            return res.status(404).json({ message: 'no this subscriber' });
        }

        const [user, created] = await registrationService.findOrCreate(req.body);
        if(!created) {
            return res.status(403).json({ message: 'no duplicated register'});
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
        const phoneNumber = req.params.phoneNumber;

        const user = await userService.isSubscriber(phoneNumber);
        if(!user) {
            return res.status(404).json({ message: 'no this subscriber' });
        }
        
        const registration = await registrationService.isRegistered(phoneNumber);
        if(!registration) {
            return res.status(404).json({ message: 'no registration'});
        }

        const { userCardId } = await userService.getUserCardIdByPhoneNumber(phoneNumber);
        const locker = await lockerService.findLockerByUserCardId(userCardId);
        if(!locker) {
            return res.status(404).json({ message: 'no locker found' });
        }
        else {
            return res.status(200).json(locker);
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