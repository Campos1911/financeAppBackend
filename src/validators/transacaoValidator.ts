import Joi from "joi";

export const transacaoValidator = Joi.object({
  valor: Joi.number().required(),
  data: Joi.string().required(),
  descricao: Joi.string().max(255),
  categoria: Joi.string().required(),
  usuarioId: Joi.number().required(),
});

export const editTransacaoValidator = Joi.object({
  valor: Joi.number().required(),
  data: Joi.string(),
  descricao: Joi.string().max(255),
  categoria: Joi.string(),
});
