import { Registration }  from '../models/registration.model.js';

const isRegistered = (req, res, next) => {
    Registration.findByPhoneNumber(req.params.phoneNumber, (err, data) => {
        if(err) {
            return res.status(500).json({ message: err.message });
        }
        else if(!data.length) {
            return res.status(404).json({ message: 'registration not found' });
        }
        else {
            return next();
        }
    });
    return;
}

const notRegistered = (req, res, next) => {
    Registration.findByPhoneNumber(req.params.phone, (err, data) => {
        console.log(err, data)
        if(err) {
            return res.status(500).json({ message: err.message });
        }
        else if(data.length) {
            return res.status(402).json({ message: 'no duplicated registration' });
        }
        else{
            return next();
        }
    });
}

export const verifyLockerRegistration = {
    isRegistered,
    notRegistered
};