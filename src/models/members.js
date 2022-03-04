'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MEMBERS extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MEMBERS.init({
    name: DataTypes.STRING,
    cardId: DataTypes.STRING,
    phone: DataTypes.STRING,
    membership: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MEMBERS',
  });
  return MEMBERS;
};