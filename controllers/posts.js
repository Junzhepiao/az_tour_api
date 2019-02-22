const knex = require('../db/knex')

module.exports = {
  getAll(req, res) {
    knex('posts').then(posts => res.json(posts))
  },
  getOne(req, res) {
    knex('posts')
      .where('id', req.params.id)
      .then(post => res.json(post))
  },
  addOne(req, res) {
    knex('posts')
      .insert(req.body)
      .returning('*')
      .then(newpost => {
        console.log("newpost",newpost)
        // res.json(newpost)
        knex('posts').then(posts => res.json(posts))
      })
  },
  updateOne(req, res) {
    knex('posts')
      .where('id', req.params.id)
      .update(req.body)
      .returning('*')
      .then(updatedpost => res.json(updatedpost))
  },
  deletePost(req, res) {
    knex('posts')
      .where('id', req.params.id)
      .del()
      .returning('*')
      .then(deletedpost => {
        // res.json(deletedpost)
        knex('posts').then(posts => res.json(posts))
      })
  }
}
