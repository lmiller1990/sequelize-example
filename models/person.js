'use strict';
module.exports = function(sequelize, DataTypes) {
  var person = sequelize.define('person', {
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: new Date().toISOString().slice(0. 19).replace('T', ' ')
    }
  }, {
    timestamp: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return person;
};
