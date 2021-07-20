'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
            userId:1,
            productId: 8,
            review:'Beautiful and bigger than i expected, quick shipping, will purhcase again'

          }
       
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
