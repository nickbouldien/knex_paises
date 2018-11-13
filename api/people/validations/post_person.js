const Joi = require("joi");

const personValidator = Joi.object({
  countryId: Joi.number()
    .integer()
    .required(),
  name: Joi.string().required(),
  profession: Joi.string().required(),
});

module.exports = { personValidator };
