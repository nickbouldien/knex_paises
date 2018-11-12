const Boom = require('boom');
const knex = require('../../../knex');

const getCountry = {
  method: 'GET',
  path: '/countries/{id}',
  options: {
    tags: ['api', 'country'],
    handler: async function (request, h) {
      const country = await knex.select('*').from('country').where('id', request.params.id);
      if (!country || !country.length) {
        return Boom.notFound(`Country with id ${request.params.id} not found!`);
      }
      return country;
    }
  }
};

module.exports = getCountry;
