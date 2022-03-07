const db = require('../models/index.js');
const memberService = require('../services/memberService.js');
const registrationService = require('../services/registrationService.js');
const lockerService = require('../services/lockerService.js');
const phoneFormatter = require('../utils/phoneFormat.js')

registerLocker = async (req, res) => {
    try {
        const phone = phoneFormatter.format886PhoneNumber(req.body.phone);
        if(phone.length != 10 || !req.body.priority) {
            return res.status(404).json({ message: '資料內容錯誤'});
        }

        const checkMember = await memberService.isSubscriber(phone);
        if(!checkMember) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }

        const [member, created] = await registrationService.findOrCreate(checkMember.id,req.body.priority);
        if(!created) {
            return res.status(403).json({ message: '您已登記過鎖櫃!'});
        }
        else {
            return res.status(201).json(member);
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

searchLockerLottery = async (req, res) => {
    try {
        const phone = phoneFormatter.format886PhoneNumber(req.query.phone);//notice!! it's req.query!!
        if(phone.length != 10) {
            return res.status(404).json({ message: '手機號碼錯誤'});
        } 
        const checkMember = await memberService.isSubscriber(phone);
        if(!checkMember) {
            return res.status(404).json({ message: '非暢遊會員,無法登記鎖櫃!' });
        }
        
        const locker = await lockerService.findLockerByMemberId(checkMember.id);
        if(locker) {
            return res.status(200).json({ message: '您抽中的鎖櫃為 - '+
            locker.dataValues.lockerNo+' 號('+locker.dataValues.lockerEncoding+') 請向工作人員索取使用登記表簽名'});
        }

        const registration = await registrationService.isRegistered(checkMember.id);
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