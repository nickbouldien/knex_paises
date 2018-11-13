const Boom = require("boom");
const knex = require("../../../knex");

const getPerson = {
  method: "GET",
  path: "/api/v1/people/{id}",
  options: {
    tags: ["api", "people"],
    handler: async function(request, h) {
      const person = await knex
        .select("person.name", "person.profession", "country.name as countryName")
        .from("person")
        .join("country", "person.countryId", "=", "country.id")
        .where("person.id", request.params.id);

      if (!person || !person.length) {
        return Boom.notFound(`Person with id ${request.params.id} not found!`);
      }
      return person;
    },
  },
};

module.exports = getPerson;
