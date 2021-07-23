'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('Images', [
        {
          productId:1,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image1.png'
        },
        {
          productId:11,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image1.png'
        },
        {
          productId:12,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image11.png'
        },
        {
          productId:13,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image11.png'
        },
        {
          productId:14,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image14.png'
        },
        {
          productId:15,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image14.png'
        },
        {
          productId:16,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image16.png'
        },
        {
          productId:17,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image17.png'
        },
        {
          productId:2,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image2.png'
        },
        {
          productId:15,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image4.png'
        },
        {
          productId:4,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image4.png'
        },
        {
          productId:6,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image5.png'
        },
        {
          productId:8,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image7.png'
        },
        {
          productId:9,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image8.png'
        },
        {
          productId:10,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__image9.png'
        },
        {
          productId:7,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__images6.png'
        },
        {
          productId:7,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__images6.png'
        },
        {
          productId:22,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__desert-rose-22-3.png'
        },
        {
          productId:22,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__desert-rose-22-1.png'
        },
        {
          productId:22,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__desert-rose-22-3.png'
        },
        {
          productId:18,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Fairy-Quartz-18-1.png'
        },
        {
          productId:18,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Fairy-Quartz-18-3.png'
        },
        {
          productId:18,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__fairy-quartz-19-3.png'
        },
        {
          productId:23,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__folurite-natural-23-1.png'
        },
        {
          productId:,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Honey-21-1.png'
        },
        {
          productId:,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Fairy-Quartz-18-3.png'
        },
        {
          productId:,
          imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/pd__Fairy-Quartz-18-3.png'
        },

       
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Images', null, {});
    
  }
};
