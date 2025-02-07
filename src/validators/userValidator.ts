import Joi from "joi";

export const loginValidator = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
});

export const registerValidator = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required(),
  nome: Joi.string().required(),
});
