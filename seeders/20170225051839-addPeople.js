'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('people', [{
      name: 'Lachlan',
      gender: 'Male',
      age: 25,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('people', null, {})
  }
};
