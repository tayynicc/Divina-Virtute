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
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-4.png'
      },
      {
        email: faker.internet.email(),
        username: 'gemHunter',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-2.png'
      },
      {
        email: faker.internet.email(),
        username: 'crystlineGoddess',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/userDefault-1.png'
      },
      {
        email: faker.internet.email(),
        username: 'citrineWinnie',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
      },
      {
        email: faker.internet.email(),
        username: 'TourmalineTort',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        imageUrl:'https://divinavitute.s3.us-west-1.amazonaws.com/user-Default-3.png'
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
