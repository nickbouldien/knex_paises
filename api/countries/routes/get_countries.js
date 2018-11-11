const countryData = require('../../../sampleData/sampleCountries');

const getCountries = {
  method: 'GET',
  path: '/countries',
  handler: function (request, h) {
    return countryData;
  }
};

module.exports = getCountries;
