const knex = require('../../../knex');

const getPeople = {
  method: 'GET',
  path: '/people',
  handler: function (request, h) {
    return knex.select('*').from('person');
  }
};

module.exports = getPeople;
