const knex = require('../../../knex');

const getPeople = {
  method: 'GET',
  path: '/api/v1/people',
  options: {
    tags: ['api', 'people'],
    handler: function (request, h) {
      return knex.select('*').from('person');
    }
  }
};

module.exports = getPeople;
