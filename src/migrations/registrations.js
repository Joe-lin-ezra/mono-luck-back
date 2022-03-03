'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('REGISTRATIONs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        allowNull: false,
        unique : true ,
        type: Sequelize.STRING(15)
      },
      priority: {
        allowNull: false,
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
    await queryInterface.dropTable('REGISTRATIONs');
  }
};