'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
       id: {
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false,
       },
       name: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       user: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       email: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       password: {
          type: Sequelize.STRING,
          allowNull: false,
       },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       update_at: {
          type: Sequelize.DATE,
          allowNull: false,
       },
      });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
