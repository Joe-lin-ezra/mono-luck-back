'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('USERs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(40)
      },
      cardId: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(10)
      },
      phoneNumber: {
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
    await queryInterface.dropTable('USERs');
  }
};