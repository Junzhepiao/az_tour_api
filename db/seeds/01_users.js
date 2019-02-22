
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email:"junzhepiao@gmail.com", password:"junzhepiao",first_name:"junzhe", last_name:"piao"},
        {email:"junzhe@gmail.com", password:"junzhe",first_name:"jun", last_name:"piao"},
        {email:"piao@gmail.com", password:"piao",first_name:"joon", last_name:"park"}
      ]);
    });
};
