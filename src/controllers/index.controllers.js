import { userService }  from '../services/userService.js';
import { lockerService } from '../services/lockerService.js';
import { lockerRegistrationService } from '../services/lockerRegistrationService.js';

export function registerLocker(req, res) {
    // const phoneNumber = req.body.phoneNumber;
    // Registration.create(phoneNumber, (err, sequence) => {
    //     if(err) {
    //         res.status(500).json({ message: err.message });
    //         return;
    //     }
    //     res.status(200).json({ id: sequence, message: 'success' });
    //     return;
    // });
}


export function searchLockerLottery(req, res) {

    const isSubscriber = await userService.isSubscriber(req.params.phone);
    if(!isSubscriber) {
        return res.status(404).json({ message: 'not subscriber' });
    }

    const isRegistered = await lockerRegistrationService.isRegistered(req.params.phone);
    if(!isRegistered) {
        return res.status(404).json({ message: 'not registered' });
    }    

    
    Locker.findByPhoneNumber(req.params.phone, (err, data) => {
        if(err) {
            return res.status(500).json({ message: err.message });
        }
        else if(data.length) {
            return res.status(200).json(data);
        }
        else {
            return next();
        }
    });
    return;
}
