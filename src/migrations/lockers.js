'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('LOCKERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lockerNo: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(2)
      },
      lockerEncoding: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(20)
      },
      cardId: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(10)
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('LOCKERs');
  }
};