
exports.seed = function(knex, Promise) {
  return knex('country').del()
    .then(function () {
      return knex('country').insert([
        {
          id: 1,
          area: 9629091,
          currency: "Dollar",
          GDP: 1430000000,
          language: 'English',
          name: 'United States of America',
          population: 310232863,
        },
        {
          id: 2,
          area: 8511965,
          currency: "Real",
          GDP: 2000000000,
          language: 'Portuguese',
          name: 'Brasil',
          population: 201100000,
        },
        {
          id: 3,
          area: 1972550,
          currency: "Peso",
          GDP: 1600000000,
          language: 'Spanish',
          name: 'Mexico',
          population: 112468855,
        },
        {
          id: 4,
          area: 1138910,
          currency: "Peso",
          GDP: 394000000,
          language: 'Spanish',
          name: 'Colombia',
          population: 44205293,
        },
      ]);
    });
};
