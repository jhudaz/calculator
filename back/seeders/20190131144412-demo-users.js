'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        createdAt: '2018-06-26 09:33:09',
        updatedAt: '2018-06-26 09:33:09'
      },
      {
        firstName: 'John2',
        lastName: 'Doe',
        createdAt: '2018-06-26 09:33:09',
        updatedAt: '2018-06-26 09:33:09'
      },
      {
        firstName: 'John3',
        lastName: 'Doe',
        createdAt: '2018-06-26 09:33:09',
        updatedAt: '2018-06-26 09:33:09'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};