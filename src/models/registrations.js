'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class REGISTRATIONS extends Model {
    static associate(models) {
      // define association here
    }
  }
  REGISTRATIONS.init({
    phoneNumber: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'REGISTRATIONS',
  });
  return REGISTRATIONS;
};