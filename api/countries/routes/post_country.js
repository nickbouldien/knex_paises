const Boom = require('boom');
const countryData = require('../../../sampleCountries');
const { countryValidator } = require('../validations/post_country');

const postCountry = {
  method: 'POST',
  path: '/countries',
  options: {
    // pre: [
    //   { method: query.verifyUniqueCountry },
    // ],
    validate: {
      payload: countryValidator,
    },
    handler: function (request, h) {
      let submittedData = request.payload;
      const id = countryData.length + 1;
      submittedData.id = id;
      countryData.push(submittedData);
      const country = countryData.find(country => country.id === id);

      if (!country) {
        return Boom.notFound(`Country with id ${request.params.id} not found!`);
      }
      return country;
    }
  },
};

module.exports = postCountry;
