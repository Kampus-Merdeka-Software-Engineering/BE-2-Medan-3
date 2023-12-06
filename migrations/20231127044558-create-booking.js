'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      CityId: {
        type: Sequelize.INTEGER
      },
      DestinationId: {
        type: Sequelize.INTEGER
      },
      TransportationId: {
        type: Sequelize.INTEGER
      },
      DateDeparture: {
        type: Sequelize.DATEONLY
      },
      Passanger: {
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
    await queryInterface.addConstraint('Bookings',{
      fields: ["CityId"],
      type: "foreign key",
      name: "city_fk",
      references: {
        table: "Cities",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })

    await queryInterface.addConstraint('Bookings',{
      fields: ["DestinationId"],
      type: "foreign key",
      name: "destination_id",
      references: {
        table: "Destinations",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })

    await queryInterface.addConstraint('Bookings',{
      fields: ["TransportationId"],
      type: "foreign key",
      name: "transportation_id",
      references: {
        table: "Transportation",
        field: "id",
      },
      onDelete: "cascade",
      onUpdate: "cascade",
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Bookings','city_fk');
    await queryInterface.removeConstraint('Bookings','destination_id');
    await queryInterface.removeConstraint('Bookings','transportation_id');
    await queryInterface.dropTable('Bookings');
  }
};