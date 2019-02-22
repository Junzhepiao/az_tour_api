const express = require('express')
const router = express.Router()

const users = require('../controllers/users')
const posts = require('../controllers/posts')
const comments = require('../controllers/comments')
const places = require('../controllers/places')

// Users Routes
router.get('/users', users.getAll)
router.get('/users/:id', users.getOne)
router.post('/user', users.addOne)

// Posts Routes
router.get('/posts', posts.getAll)
router.get('/posts/:id', posts.getOne)
router.post('/posts', posts.addOne)
router.patch('/posts/:id', posts.updateOne)
router.delete('/posts/:id', posts.deletePost)

// Comments Routes
router.get('/comments', comments.getAll)
router.get('/comments/:id', comments.getOne)
router.post('/comment', comments.addOne)

// Places Routes
router.get('/places', places.getAll)
router.get('/places/:id', places.getOne)
router.patch('/places/cart/add/:id', places.addToCart)
router.patch('/places/cart/remove/:id', places.removeFromCart)

module.exports = router
