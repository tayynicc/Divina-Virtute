'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@user.io',
        username: 'Am3thiSt',
        hashedPassword: bcrypt.hashSync('password'),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-4.png',
        discription:'The worst thing about prison was the... was the Dementors. They... were flying all over the place, and they were scary. And they\'d come down, and they\'d suck the soul out of your body, and it hurt!'

      },
      {
        email: faker.internet.email(),
        username: 'gemHunter',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-2.png',
        discription:'Gruel. Sandwiches. Gruel omelettes. Nothing but gruel. Plus, you can eat your own hair.'
      
      },
      {
        email: faker.internet.email(),
        username: 'crystlineGoddess',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-1.png',
        discription:''
      },
      {
        email: faker.internet.email(),
        username: 'citrineWinnie',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/download.jpg',
        discription:' associated with positivity and optimism, which is not surprising given its cheerful color. It\'s often used to assist in manifesting financial abundance and opportunities. It can also be used to awaken the solar plexus chakra, helping to cultivate confidence and personal power.'
      },
      {
        email: faker.internet.email(),
        username: 'TourmalineTort',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/user-Default-3.png',
        discription:'And I nevah got caught, neither.'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Am3thiSt', 'gemHunter', 'crystlineGoddess', 'TourmalineTort'] }
    }, {});
  }
};
