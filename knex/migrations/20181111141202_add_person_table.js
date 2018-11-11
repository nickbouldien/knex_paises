
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable( 'person', function( personTable ) {
      personTable.increments(); // Primary Key
      personTable.integer('countryId', 36).references('id').inTable('country');
      personTable.string('name', 250).notNullable();
      personTable.string('profession', 50).notNullable();
    });
  };

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('person');
};
