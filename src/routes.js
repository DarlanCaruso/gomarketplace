const express = require('express')
const routes = express.Router()

const authMiddleware = require('./app/middleware/auth')
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

routes.get('/', (req, res) => {
  return res.send('Hello world!')
})

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))
routes.post('/users', UserController.store)
routes.post('/login', SessionController.store)

module.exports = routes
