
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        {title: "My trip to Arizona!", img: 'https://images.unsplash.com/photo-1469559845082-95b66baaf023?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80', body:"I went to grand canyon and took this awesome pic!!",votes:5, user_id:1},
        {title: "Horseshoe Bend - Awesome!", img: 'https://images.unsplash.com/photo-1522543809-b636caf95c4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2191&q=80', body:"Horseshoe Bend", votes:3,user_id:2},
        {title: "Stargazing", img: 'https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80', body:"Arizona - wonderful place for Stargazing",votes:1, user_id:3}
      ]);
    });
};
