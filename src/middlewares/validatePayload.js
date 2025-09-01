// src/middlewares/validatePayloads.js
const Joi = require('joi');

const contactSchema = Joi.object({
  nom: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  objet: Joi.string().required(),
  message: Joi.string().min(10).required(),
  artisanId: Joi.number().integer().required()
});

module.exports = (req, res, next) => {
  const { error } = contactSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
