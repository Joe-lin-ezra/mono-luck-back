const res = require('express/lib/response');
const mysql = require('mysql2/promise');
const config = require('../configs/config');

const mysqlPool = mysql.createPool({
  host: config.host,
  port: config.port,
  user: config.user,
  password: config.password,
  database: config.db,
  connectionLimit : config.connectionLimit
});

/**
 * check the user is a member
 * @param phoneNumber 
 * @returns boolean: is there any phone number in db
 */
async function findPhoneNumber(phoneNumber) {
  let outcome;
  mysqlPool.getConnection((err, conn) => {
    if(err) throw err;
    conn.query(`SELECT * FROM USER WHERE phone=${phoneNumber}`, 
    (err, results) => {
      if(err) throw err;
      res = results;
    });
  });
  return outcome.length > 0;
}
/**
 * insert priority set into database
 * @param {*} phoneNumber 
 * @param {*} priority is the locker numbers, "11/21/4". 
 */
async function insertLockerPriority(phoneNumber, priority) {
  mysqlPool.getConnection((err, conn) => {
    if(err) throw err;
    conn.query(`INSERT INTO REGISTRATION VALUES\
    (${phoneNumber}, ${priority})`, 
    (err) => {
      if(err) throw err;
    });
  });
}
/**
 * check membership of specific user
 * !because of db changed, we need not check membership
 * todo: table name, and column name check
 * @param {*} phoneNumber 
 * @returns string : membership
 */
async function checkMembership(phoneNumber) {
  let outcome;
  mysqlPool.getConnection((err, conn) => {
    if(err) throw err;
    conn.query(`SELECT membership FROM USER WHERE phone=${ phoneNumber }`, 
    (err, results) => {
      outcome = results;
      if(err) throw err;
    });
  });
  return outcome;
}

/**
 * forbidden the duplicate registration of locker
 * @param {*} phoneNumber 
 * @returns boolean
 */
async function verifyDuplicateRegisterLocker(phoneNumber) {
  let outcome;
  mysqlPool.getConnection((err, conn) => {
    if(err) throw err;
    conn.query(`SELECT * FROM REGISTRATION WHERE phone=${ phoneNumber }`, 
    (err, results) => {
      outcome = results;
      if(err) throw err;
    });
  });
  return outcome.length > 0;
}

/**
 * join USER and LOCKER by user-card-id 
 * user-card-id is gotten by phone number in  USER table
 * @param {*} phoneNumber 
 * @returns outcomes, including 編號、編碼、username, user card id
 */
async function findLocker(phoneNumber) {
  let outcome;
  mysqlPool.getConnection((err, conn) => {
    if(err) throw err;
    conn.query(`SELECT * FROM USER JOIN LOCKER \
    ON USER.userCardId=LOCKER.userCardId\
    WHERE phoneNumber=${phoneNumber}`, 
    (err, results) => {
      outcome = results;
      if(err) throw err;
    });
  });
  return outcome;
}

module.exports = {
  findPhoneNumber,
  insertLockerPriority,
  checkMembership,
  verifyDuplicateRegisterLocker,
  findLocker
}