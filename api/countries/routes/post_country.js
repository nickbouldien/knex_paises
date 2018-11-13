const Boom = require("boom");
const knex = require("../../../knex");
const { countryValidator } = require("../validations/post_country");

const postCountry = {
  method: "POST",
  path: "/api/v1/countries",
  options: {
    // pre: [
    //   { method: query.verifyUniqueCountry },
    // ],
    tags: ["api", "country"],
    validate: {
      payload: countryValidator,
    },
    handler: async function(request, h) {
      let submittedData = request.payload;

      const country = await knex("country")
        .insert(submittedData)
        .returning("*");

      if (!country || !country.length) {
        // FIXME - best way to do this??
        return Boom.notFound(`Country with id ${request.params.id} not found!`);
      }
      return country;
    },
  },
};

module.exports = postCountry;
