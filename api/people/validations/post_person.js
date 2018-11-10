const Joi = require('joi');

const personValidator = Joi.object({
  country: Joi.string().required(),
  name: Joi.string().required(),
  profession: Joi.string().required(),
});

module.exports = { personValidator };
