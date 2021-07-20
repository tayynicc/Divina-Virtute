'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    discription: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    purchaseLink: DataTypes.TEXT
  }, {});
  Products.associate = function(models) {
    Products.belongsTo(models.User, { foreignKey:'ownerId'})

    Products.hasMany(models.Review, { foreignKey: 'productId'})

  };
  return Products;
};
