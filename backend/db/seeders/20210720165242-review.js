'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
          {
            userId:1,
            productId: 8,
            review:'Beautiful and bigger than i expected, quick shipping, will purchase again'

          },
          {
            userId:1,
            productId: 7,
            review:' i NEED this in my life'

          },
          {
            userId:2,
            productId: 8,
            review:'great price and even better product'

          },
          {
            userId:2,
            productId: 1,
            review:'Beautiful!!'

          },
          {
            userId:5,
            productId: 8,
            review:'Ordered and in the way, I can\'t wait to get my hands on it'

          },
          {
            userId:4,
            productId: 2,
            review:'Amazing Price, can\'t wait for it to arrive'

          },
          {
            userId:1,
            productId: 3,
            review:'Great Addition to my collection!'

          },
          {
            userId:4,
            productId: 4,
            review:'Beautiful and bigger than i expected, quick shipping, will purhcase again'

          },
          {
            userId:4,
            productId: 5,
            review:'on my wish list!! '

          },
          {
            userId:4,
            productId: 6,
            review:'Shipping was propmt and it was packaged safely, will purchase from this seller again'

          },
          {
            userId:5,
            productId: 7,
            review:'I\'ve never seen one of these before! How beautiful!'

          },
          {
            userId:3,
            productId:8,
            review:'One of my favorite crystals, i already have a few and these are great quality for the price!'

          },
          {
            userId:5,
            productId: 9,
            review:'Beautiful and bigger than i expected, quick shipping, will purhcase again'

          },
          {
            userId:5,
            productId: 7,
            review:'Shipping took a while but it was worth the wait'

          },
          {
            userId:5,
            productId: 10,
            review:'One of my favorites, can\'t wait till it arrives!'

          },
          {
            userId:5,
            productId: 11,
            review:'Wow, Wow, Woooooow!'

          }
       
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
