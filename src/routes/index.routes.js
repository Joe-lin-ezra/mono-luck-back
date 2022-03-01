import { registerLocker, searchLockerLottery } from '../controllers/index.controllers.js';

export default (router) => {

    /**
     * temporally not use
     */
    router.get('/api/docs', (req, res) => {
        res.send();
    });

    /**
     * temporally not use
     */
    router.get('/api/docs/:id', (req, res) => {
        res.send();
    });

    /**
     * 
     */
    router.get('/api/lottery/:phone', searchLockerLottery);

    router.post('/api/registerLocker', registerLocker);
}