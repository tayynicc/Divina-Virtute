'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Images', [
        {
          productId:1,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image1.png'
        },
       
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});
    
  }
};
