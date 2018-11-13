const knex = require('../../../knex');

const getCountries = {
  method: 'GET',
  path: '/api/v1/countries',
  options: {
    tags: ['api', 'country'],
    handler: function (request, h) {
      return knex.select('*').from('country');
    }
  },
};

module.exports = getCountries;
