
exports.seed = function(knex, Promise) {
  return knex('person').del()
    .then(function () {
      return knex('person').insert([
        {
          id: 1,
          name: 'Neymar',
          profession: "soccer player",
          countryId: 2,
        },
        {
          id: 2,
          name: 'Shakira',
          profession: "singer",
          countryId: 4,
        },
        {
          id: 3,
          name: 'Chicharito',
          profession: "soccer player",
          countryId: 3,
        },
        {
          id: 4,
          name: 'Obama',
          profession: "politician",
          countryId: 1,
        },
      ]);
    });
};
