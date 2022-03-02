const db = require('../../models/index.js');
const user = db.user;

user.create({
    username: '王小明',
    cardId: '0192836475',
    phoneNumber: '0911111111',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: '王小明',
    cardId: '0192836475',
    phoneNumber: '0911111111',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: 'John Cena',
    cardId: '1829384756',
    phoneNumber: '0922222222',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: 'Neil Patrick Harris',
    cardId: '6152635142',
    phoneNumber: '0933333333',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: '阿巴',
    cardId: '5473182736',
    phoneNumber: '0944444444',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: '王力宏',
    cardId: '4736281948',
    phoneNumber: '0955555555',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});
user.create({
    username: '蔡依林',
    cardId: '3812334567',
    phoneNumber: '0966666666',
    createdAt: new Date(Date.now()),
    updatedAt: new Date(Date.now())
});