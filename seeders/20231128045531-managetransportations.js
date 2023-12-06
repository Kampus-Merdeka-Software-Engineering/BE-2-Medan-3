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
    await queryInterface.bulkInsert('managetransportations', [{
      DestinationId: 1,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 1,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 1,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 2,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 2,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 2,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 3,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 3,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 3,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 4,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 4,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 4,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 5,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 5,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 5,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 6,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 6,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 6,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 7,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 7,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 7,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 8,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 8,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 8,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 9,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 9,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 9,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 10,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 10,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 10,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 11,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 11,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 11,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 12,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 12,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 12,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 13,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 13,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 13,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 14,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 14,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 14,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 15,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 15,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 15,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 16,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 16,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 16,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 17,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 17,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 17,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 18,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 18,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 18,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 19,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 19,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 19,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 20,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 20,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 20,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 21,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 21,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 21,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 22,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 22,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 22,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 23,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 23,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 23,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 24,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 24,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 24,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 25,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 25,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 25,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 26,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 26,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 26,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 27,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 27,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 27,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 28,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 29,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 29,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 30,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 30,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 30,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 31,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 31,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 31,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 32,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 32,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 32,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 33,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 33,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 33,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 34,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 34,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 34,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 35,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 35,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 35,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 36,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 36,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 36,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 37,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 37,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 37,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 38,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 38,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 38,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 39,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 39,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 39,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 40,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 40,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 40,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 41,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 41,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 41,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 42,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 42,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 42,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId:43,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 43,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 43,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 44,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 44,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 44,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 45,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 45,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 45,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 46,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 46,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 46,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 47,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 47,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 47,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 48,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 48,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 48,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 49,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 49,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 49,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 50,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 50,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 50,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 51,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 51,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 51,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 52,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 52,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 52,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 53,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 53,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 53,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 54,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 54,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 54,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 55,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 55,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 55,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 56,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 56,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 56,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 57,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 57,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 57,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 58,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 58,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 58,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 59,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 59,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 59,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 60,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 60,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 60,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 61,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 61,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 61,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 62,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 62,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 62,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 63,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 63,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 63,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 64,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 64,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 64,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 65,
      TransportationId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 65,
      TransportationId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      DestinationId: 65,
      TransportationId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('managetransportations', null, {});
  }
};
