'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    discription: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    purchaseLink: DataTypes.TEXT
  }, {});
  Products.associate = function(models) {
    // Products.hasOne(models.User, { foreignKey: 'ownerId'})
    Products.belongsTo(models.User, { foreignKey:'ownerId'})

    Products.hasMany(models.Review, { foreignKey: 'productId'})

  };
  return Products;
};
