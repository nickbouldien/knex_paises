
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable( 'country', function( countryTable ) {
      countryTable.increments(); // Primary Key
      countryTable.integer( 'area', 30 );
      countryTable.string( 'currency', 30 );
      countryTable.integer( 'GDP', 30 );
      countryTable.string( 'language', 30 ).notNullable();
      countryTable.string( 'name', 50 ).notNullable().unique();
      countryTable.integer( 'population', 50 );
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('country');
};
