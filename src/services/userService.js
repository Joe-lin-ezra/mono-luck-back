import { User }  from '../models/user.model.js';

const userModel = new User();

const isSubscriber = async (phone) => {
    const user = await userModel.findByPhoneNumber(phone, (err, data) => {
        if(err) {
            return err.message;
        }
        else if(data.length) {
            return user;
        }
        else {
            return '';
        }
    });
    return user;
}

export const verifyMembership = {
    isSubscriber
};
const a =  await isSubscriber('0999999999')
console.log(a)