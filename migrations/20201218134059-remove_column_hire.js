'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('Hires', 'orderBy', Sequelize.INTEGER);
    await queryInterface.removeColumn('Hires', 'orderTo', Sequelize.INTEGER);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Hires', 'orderTo', Sequelize.INTEGER);
    await queryInterface.removeColumn('Hires', 'orderBy', Sequelize.INTEGER);
  },
};
