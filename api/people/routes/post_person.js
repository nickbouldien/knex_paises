const Boom = require('boom');
const knex = require('../../../knex');

const { personValidator } = require('../validations/post_person');

const postPerson = {
  method: 'POST',
  path: '/people',
  options: {
    // pre: [
    //   { method: query.verifyUniquePerson },
    // ],
    tags: ['api', 'people'],
    validate: {
      payload: personValidator,
    },
    handler: async function (request, h) {
      let submittedData = request.payload;

      const person = await knex('person').insert(submittedData).returning('*');

      console.log("person, ", person);

      if (!person || !person.length) { // FIXME - best way to do this??
        return Boom.notFound(`Person with id ${request.params.id} not found!`);
      }
      return person;
    }
  },
};

module.exports = postPerson;
