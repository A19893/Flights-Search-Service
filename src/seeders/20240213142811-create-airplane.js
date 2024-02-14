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
    await queryInterface.bulkInsert(
      "airplanes",
      [
        {
          model_number: 'Bowing 11',
          capacity: 140,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model_number: 'Private Jet',
          capacity: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          model_number: 'Charted Plane',
          capacity: 140,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
