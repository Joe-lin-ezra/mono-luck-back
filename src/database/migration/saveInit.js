const db = require('../../models/index.js');

/**
 * * safe initialize
 * * creates the table if it doesn't exist
 * * does nothing if it already exists
 */

const safeInit = async () => {
    db.user.sync();
    db.lockerRegistration.sync();
    db.locker.sync();
}