exports.up = function(knex, Promise) {
    return knex.schema.createTable('posts', function(table) {
        table.increments();
        table.string('title');
        table.text('img');
        table.text('body');
        table.integer('votes'),
        table.integer('user_id')
            .references('id')
            .inTable('users')
            .onDelete('cascade')
            .notNullable();
        table.timestamps(true,true);
      })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('posts')
};
