import { registerLocker, searchLockerLottery, takeSpecificDocs } from '../controllers/index.controllers';

module.exports = function(router) {
    
    router.get('/home', (req, res) => {
        res.render('home');
    });

    router.get('/docs', (req, res) => {
        res.send();
    });

    router.get('/docs/:id', takeSpecificDocs);

    router.get('/registerPage', (req, res) =>{
        res.render('registerPage');
    });

    router.get('/searchPage', (req, res) => {
        res.render('searchPage');
    });

    router.get('/searchPage/:phone', searchLockerLottery);

    router.post('/lockerRegister', registerLocker);
}