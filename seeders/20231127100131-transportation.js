'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Transportation', [{
      types_of_transportation: "Mobil",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      types_of_transportation: "Bus",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      types_of_transportation: "Taksi",
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Transportation', null, {});
  }
};
