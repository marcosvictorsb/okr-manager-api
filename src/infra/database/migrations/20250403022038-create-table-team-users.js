'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(
      'team_users',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        id_team: {
          type: Sequelize.INTEGER,
          references: {
            model: 'teams',
            key: 'id',
          },
        },
        id_user: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        id_company: {
          type: Sequelize.INTEGER,
          references: {
            model: 'companies',
            key: 'id',
          },
        },
        created_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updated_at: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        deleted_at: {
          allowNull: true,
          type: Sequelize.DATE,
        },
      },
    );
  },

  async down (queryInterface) {
    await queryInterface.dropTable('team_users');
  }
};
