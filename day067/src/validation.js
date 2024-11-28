const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateUser = (user) => {
  return userSchema.validate(user);
};

module.exports = validateUser;