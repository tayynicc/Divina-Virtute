'use strict';
module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define('Images', {
    productId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Images.associate = function(models) {
    
    Images.belongsTo(models.Products, { foreignKey: 'productId'})

  };
  return Images;
};