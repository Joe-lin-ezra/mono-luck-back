'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class USERS extends Model {
    static associate(models) {
      // define association here
    }
  }
  USERS.init({
    name: DataTypes.STRING,
    cardId: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'USERS',
  });
  return USERS;
};