const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')

routes.get('/', (req, res) => {
  return res.send('Hello world!')
})

routes.post('/users', UserController.store)

module.exports = routes
