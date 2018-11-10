const Boom = require('boom');
const personData = require('../../../samplePeople');

const getPerson = {
  method: 'GET',
  path: '/people/{id}',
  handler: function (request, h) {
    const person = personData.find(person => person.id === Number(request.params.id) );
    if (!person) {
      return Boom.notFound(`Person with id ${request.params.id} not found!`);
    }
    return person;
  }
};

module.exports = getPerson;
