'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Product', {
    ownerId: DataTypes.INTEGER,
    title: DataTypes.TEXT,
    tagLine: DataTypes.TEXT,
    discription: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    imageUrl: DataTypes.STRING,
    purchaseLink: DataTypes.TEXT,
    collectionTag: DataTypes.TEXT,
    collectionId: DataTypes.INTEGER,
  }, {});
  Products.associate = function(models) {
    // Products.hasOne(models.User, { foreignKey: 'ownerId'})
    Products.belongsTo(models.User, { foreignKey:'ownerId'})

    Products.hasMany(models.Review, { foreignKey: 'productId'})

    // Products.hasMany(models.Images, { foreignKey: 'productId', onDelete: 'cascade', hooks:true})

  };
  return Products;
};
