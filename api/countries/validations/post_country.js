const Joi = require('joi');

const countryValidator = Joi.object({
  area: Joi.integer().positive(),
  currency: Joi.string().required(),
  GDP: Joi.string().required(),
  language: Joi.string().required(),
  name: Joi.string().required(),
  population: Joi.integer().positive()
});

module.exports = { countryValidator };
