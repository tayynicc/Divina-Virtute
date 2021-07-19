'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};