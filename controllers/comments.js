const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('comments').then(comments => res.json(comments))
  },
  getOne(req, res) {
    knex('comments')
      .where('id', req.params.id)
      .then(comment => res.json(comment))
  },
  addOne(req, res) {
    knex('comments')
      .insert(req.body)
      .returning('*')
      .then(newcomment => {
        console.log("new comment",newcomment)
        // res.json(newcomment)
        knex('comments').then(comments => res.json(comments))
      })
  }
}
