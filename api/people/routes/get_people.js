const knex = require("../../../knex");

const getPeople = {
  method: "GET",
  path: "/api/v1/people",
  options: {
    tags: ["api", "people"],
    handler: function(request, h) {
      let { limit = 100, offset = 0, order_by = "asc", sort_by = "id" } = request.query;

      return knex
        .select("*")
        .from("person")
        .orderBy(sort_by, order_by)
        .offset(offset)
        .limit(limit);
    },
  },
};

module.exports = getPeople;
