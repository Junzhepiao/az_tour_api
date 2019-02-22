const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('places').then(places => res.json(places))
  },
  getOne(req, res) {
    knex('places')
      .where('id', req.params.id)
      .then(place => res.json(place))
  },
  addToCart(req, res) {
    knex('places')
      .where('id', req.params.id)
      .update({
        inCart: true
      })
      .returning('*')
      .then(updatedPlace => res.json(updatedPlace))
  },
  removeFromCart(req, res) {
    knex('places')
      .where('id', req.params.id)
      .update({
        inCart: false
      })
      .returning('*')
      .then(updatedPlace => res.json(updatedPlace))
  },
}
