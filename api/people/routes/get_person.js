const Boom = require('boom');
const knex = require('../../../knex');

const getPerson = {
  method: 'GET',
  path: '/people/{id}',
  handler: async function (request, h) {
    const person = await knex.select('*').from('person').where('id', request.params.id);

    if (!person || !person.length) {
      return Boom.notFound(`Person with id ${request.params.id} not found!`);
    }
    return person;
  }
};

module.exports = getPerson;
