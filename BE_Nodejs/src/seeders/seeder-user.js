'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      email: 'letuan@gmail.com',
      password: '123456',
      firstName: 'Le',
      lastName: 'Tuan',
      address: 'VN',
      gender: 1,
      roleId: 'ROLE',
      image: 'R1',
      //---------------------------
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
