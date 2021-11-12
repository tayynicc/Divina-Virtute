'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stones = sequelize.define('Stones', {
    name: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    elements: DataTypes.STRING,
    origin: DataTypes.STRING,
    body: DataTypes.STRING,
    specialInstructions: DataTypes.STRING
  }, {});
  Stones.associate = function(models) {
    // associations can be defined here
  };
  return Stones;
};