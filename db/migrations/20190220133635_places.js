exports.up = function(knex, Promise) {
    return knex.schema.createTable('places', function(table) {
        table.increments();
        table.string('name');
        table.text('img');
        table.boolean('inCart').defaultTo(false)
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('places')
};
