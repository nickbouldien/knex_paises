const Joi = require('joi');

const countryValidator = Joi.object({
  area: Joi.number().integer().positive(),
  currency: Joi.string().required(),
  GDP: Joi.number().integer().positive(),
  language: Joi.string().required(),
  name: Joi.string().required(),
  population: Joi.number().integer().positive()
});

module.exports = { countryValidator };
