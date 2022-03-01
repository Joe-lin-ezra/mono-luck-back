const db = require('./models/index.js')

myfunc = async () => {
    const row = await db.user.findAll();
    console.log(row[0].dataValues);
    return row
}

const row = myfunc()
