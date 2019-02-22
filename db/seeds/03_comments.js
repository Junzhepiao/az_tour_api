
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {content: "I've been there!! really nice.", post_id: 1},
        {content: "Great picture, I like it!", post_id: 2},
        {content: "Wow, awesome view.", post_id: 3}
      ]);
    });
};
