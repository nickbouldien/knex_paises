const Boom = require('boom');
const personData = require('../../../samplePeople');
const { personValidator } = require('../validations/post_person');

const postPerson = {
  method: 'POST',
  path: '/people',
  options: {
    // pre: [
    //   { method: query.verifyUniquePerson },
    // ],
    validate: {
      payload: personValidator,
    },
    handler: function (request, h) {
      let submittedData = request.payload;
      const id = personData.length + 1;
      submittedData.id = id;
      personData.push(submittedData);
      const person = personData.find(person => person.id === id);

      if (!person) {
        return Boom.notFound(`Person with id ${request.params.id} not found!`);
      }
      return person;
    }
  },
};

module.exports = postPerson;
