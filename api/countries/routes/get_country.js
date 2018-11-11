const Boom = require('boom');
const countryData = require('../../../sampleData/sampleCountries');

const getCountry = {
  method: 'GET',
  path: '/countries/{id}',
  handler: function (request, h) {
    const country = countryData.find(country => country.id === Number(request.params.id) );
    if (!country) {
      return Boom.notFound(`Country with id ${request.params.id} not found!`);
    }
    return country;
  }
};

module.exports = getCountry;
