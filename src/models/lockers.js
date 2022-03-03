'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LOCKERS extends Model {
    static associate(models) {
      // define association here
    }
  }
  LOCKERS.init({
    lockerNo: DataTypes.STRING,
    lockerEncoding: DataTypes.STRING,
    cardId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LOCKERS',
  });
  return LOCKERS;
};