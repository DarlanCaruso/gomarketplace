const express = require('express')
const routes = express.Router()

const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', (req, res) => {
  return res.send('Hello world!')
})

routes.post('/users', UserController.store)
routes.post('/login', SessionController.store)

module.exports = routes
