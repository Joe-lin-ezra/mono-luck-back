const db = require('../../models/index.js');

/**
 * ! don't run this script in product-level database
 */

/**
 * ! This creates the table, dropping it first if it already existed
 */
const forceInit = async () => {
    db.user.sync({ force: true });
    db.lockerRegistration.sync({ force: true });
    db.locker.sync({ force: true });
}

/**
 * ! This checks what is the current state of the table in the database 
 * ! (which columns it has, what are their data types, etc),
 * ! and then performs the necessary changes in the table to make it match the model.
 */

const alterInit = async () => {
    db.user.sync({ alter: true });
    db.lockerRegistration.sync({ alter: true });
    db.locker.sync({ alter: true });
}
