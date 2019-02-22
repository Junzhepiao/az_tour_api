exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', function(table) {
        table.increments();
        table.string('content');
        table.integer('post_id')
            .references('id')
            .inTable('posts')
            .onDelete('cascade')
            .notNullable();
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comments')
};
