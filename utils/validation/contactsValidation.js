const Joi = require("joi");

// const namePattern = /^[\p{Script=Latin}\p{Script=Cyrillic}\s]*$/u;
// const phonePattern = /^[0-9 ()+-]+$/;

// const schemaCreateContact = Joi.object({
//   name: Joi.string().pattern(namePattern).min(3).max(30).required(),
//   email: Joi.string()
//     .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
//     .required(),
//   phone: Joi.string().pattern(phonePattern).min(7).max(18).required(),
// }).options({ abortEarly: false });
const schemaCreateContact = Joi.object({
  name: Joi.string()
    .required()
    .messages({ "any.required": "missing required name field" }),

  email: Joi.string()
    .required()
    .messages({ "any.required": "missing required email field" }),
  phone: Joi.string()
    .required()
    .messages({ "any.required": "missing required phone field" }),
});

// const schemaUpdateContact = Joi.object({
//   name: Joi.string().pattern(namePattern).min(3).max(30).optional(),
//   email: Joi.string()
//     .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
//     .required(),
//   phone: Joi.string().pattern(phonePattern).min(7).max(18).optional(),
// })
//   .or("name", "email", "phone")
//   .options({ abortEarly: false });

const schemaUpdateContact = Joi.object({
  name: Joi.string().required().messages({ "any.required": "missing fields" }),

  email: Joi.string().required().messages({ "any.required": "missing fields" }),
  phone: Joi.string().required().messages({ "any.required": "missing fields" }),
});

module.exports = {
  schemaCreateContact,
  schemaUpdateContact,
};
