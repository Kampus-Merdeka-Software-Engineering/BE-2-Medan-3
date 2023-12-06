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
    await queryInterface.bulkInsert('cities', [
      {
        name: 'Badung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Gianyar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Tabanan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Bangli',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Buleleng',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'KerangAsem',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Klungkung',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Jembrana',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Denpasar',
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
    await queryInterface.bulkDelete('cities', null, {});
  }
};
