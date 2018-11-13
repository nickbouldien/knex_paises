const knex = require("../../../knex");

const getCountries = {
  method: "GET",
  path: "/api/v1/countries",
  options: {
    tags: ["api", "country"],
    handler: function(request, h) {
      let { limit = 100, offset = 0, order_by = "asc", sort_by = "id" } = request.query;

      return knex
        .select("*")
        .from("country")
        .orderBy(sort_by, order_by)
        .offset(offset)
        .limit(limit);
    },
  },
};

module.exports = getCountries;
