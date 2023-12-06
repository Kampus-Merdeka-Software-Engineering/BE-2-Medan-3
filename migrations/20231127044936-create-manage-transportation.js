'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ManageTransportations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      DestinationId: {
        type: Sequelize.INTEGER
      },
      TransportationId: {
        type: Sequelize.INTEGER
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
    await queryInterface.addConstraint('ManageTransportations',{
      fields: ["DestinationId"],
      type: "foreign key",
      name: "id_fk_destination",
      references: {
        table: "Destinations",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })

    await queryInterface.addConstraint('ManageTransportations',{
      fields: ["TransportationId"],
      type: "foreign key",
      name: "id_fk_transportation",
      references: {
        table: "Transportation",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('ManageTransportations','id_fk_destination');
    await queryInterface.removeConstraint('ManageTransportations','id_fk_transportation');
    await queryInterface.dropTable('ManageTransportations');
  }
};