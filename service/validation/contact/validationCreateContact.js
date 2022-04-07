const Joi = require('joi');
const { regexName, regexEmail, regexPhone } = require('../../../helpers/regex');
const {
  CONTACT_NAME_LIMIT,
  CONTACT_PHONE_LIMIT,
} = require('../../../helpers/constants');

const validationCreateContact = Joi.object({
  name: Joi.string()
    .pattern(regexName)
    .min(CONTACT_NAME_LIMIT.MIN)
    .max(CONTACT_NAME_LIMIT.MAX)
    .required()
    .messages({
      'any.required': 'Name is required',
      'string.empty': 'The name cannot be empty',
    }),
  email: Joi.string().pattern(regexEmail).required().messages({
    'any.required': 'Email is required',
    'string.empty': 'The email cannot be empty',
  }),
  phone: Joi.string()
    .pattern(regexPhone)
    .min(CONTACT_PHONE_LIMIT.MIN)
    .max(CONTACT_PHONE_LIMIT.MAX)
    .required()
    .messages({
      'any.required': 'Phone is required',
      'string.empty': 'The phone cannot be empty',
    }),
  favorite: Joi.boolean().optional().default(false).messages({
    'any.optional': "Favorite isn't required",
    'string.empty': 'The favorite cannot be empty',
  }),
});

module.exports = validationCreateContact;
