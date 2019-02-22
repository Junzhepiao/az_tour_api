const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('users').then(users => res.json(users))
  },
  getOne(req, res) {
    knex('users')
      .where('id', req.params.id)
      .then(user => res.json(user))
  },
  addOne(req, res) {
    knex('users')
      .insert(req.body)
      .returning('*')
      .then(newuser => res.json(newuser))
  }
}
