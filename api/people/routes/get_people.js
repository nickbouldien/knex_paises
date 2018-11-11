const personData = require('../../../sampleData/samplePeople');

const getPeople = {
  method: 'GET',
  path: '/people',
  handler: function (request, h) {
    return personData;
  }
};

module.exports = getPeople;
