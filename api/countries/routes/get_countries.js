const knex = require('../../../knex');

const getCountries = {
  method: 'GET',
  path: '/countries',
  options: {
    tags: ['api', 'country'],
    handler: function (request, h) {
      return knex.select('*').from('country');
    }
  },
};

module.exports = getCountries;
