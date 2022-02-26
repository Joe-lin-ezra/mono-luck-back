const {Locker, Registration, User} = require('../models/index');

registerLocker = (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    // if phoneNumber not found
    if(!db.findPhoneNumber(phoneNumber)) {
        res.status(404).json({ message: 'Phone number not found'})
    }

    if(db.verifyDuplicateRegisterLocker(phoneNumber)) {
        res.status(403).json({ message: 'Duplicate registration'})
    }

    let result = await insertLockerPriority(phoneNumber, req.body.priority);
    res.status(200).json({ message: 'success' })
}


searchLockerLottery = (req, res) => {
    if(!db.findPhoneNumber(phoneNumber)) {
        res.status(400).json({ message: 'membership error'});
    }

    if(!db.verifyDuplicateRegisterLocker(phoneNumber)) {
        res.status(400).json({ message: 'registration not found' });
    }

    const outcome = db.findLocker(phoneNumber);
    res.status(200).json(outcome);    
}

takeSpecificDocs = (req, res) => {
    
}

module.exports = {
    registerLocker,
    searchLockerLottery,
    takeSpecificDocs
}