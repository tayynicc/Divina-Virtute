'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    discription: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    purchaseLink: DataTypes.TEXT
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};