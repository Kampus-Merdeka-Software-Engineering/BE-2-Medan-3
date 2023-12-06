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
    await queryInterface.bulkInsert('Destinations', [{
      CityId: 1,
      name: "Pantai Seminyak",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Pantai Kuta",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Padang-Padang",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Suluban(blue point)",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Dreamland",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Jimbaran",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Pandawa",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 1,
      name: "Tanjung Benoa",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Puri Saren Agung",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Monkey Forest",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Museum Seni Lukis",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Wisata Rafting",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Air Terjun Blangsinga",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Wisata Kopi Luwak",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Bali Swing",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Bali Bird Park",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Bali Zoo",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Taman Safari",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 2,
      name: "Goa Gajah",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Sawah Berundak",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Jatiluwih",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Danau Beratan Bedugul",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Wisata Tanah Lot",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Secret Garden Village",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Air Panas Angseri",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Air Panas Penatahan",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 3,
      name: "Taman Kupu-Kupu",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 4,
      name: "Anjungan Tukad Melangit",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 4,
      name: "Stone Garden",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 4,
      name: "Animal Park",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 4,
      name: "Air Terjun Tukad Cepung",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 4,
      name: "Pura Kehen",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Pantai Kovina",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Air Terjun Banyumala",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Air Terjun Carat",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Puncak Wanagiri",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Air Panas Banjar",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 5,
      name: "Krisna Adventure",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Odyssey Submarine",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Puri Karangasem",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Rafting Telaga Waja",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Bukit Jambul",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Bekasih",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 6,
      name: "Desa Tenganan",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Jembatan Kuning",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Goa Gala-Gala",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Pantai Banah",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Pantai Atuh",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Broken Beach",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Crystal Beach",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Kali Unda",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Bakas Aventure",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Goa Lawa",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 7,
      name: "Kerta Gosa",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Air Terjun Batu Belah Dewasari",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Green Cliff Jembrana",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Pantai Karang Sewu",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Air Terjun Juwuk Manis",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Bunut Bolong",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 8,
      name: "Gereja Maria Palasari",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 9,
      name: "Bali Hai Cruise",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 9,
      name: "Balu Wake Park",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 9,
      name: "Taman Budaya Bali",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 9,
      name: "Monumen Bajra Sandhi",
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      CityId: 9,
      name: "Tari Barong Kesiman",
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
    await queryInterface.bulkDelete('Destinations', null, {});
  }
};
