const Joi = require('Joi')

module.exports = {
  body: {
    ad: Joi.string().required(),
    content: Joi.string().required()
  }
}
