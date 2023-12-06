'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Destinations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CityId: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('Destinations',{
      fields: ["CityId"],
      type: "foreign key",
      name: "id_city",
      references: {
        table: "Cities",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Destinations','id_city');
    await queryInterface.dropTable('Destinations');
  }
};