import Joi from "joi";

export const feedbackValidator = Joi.object({
  usuarioId: Joi.number().required(),
  nota: Joi.number().valid(0, 1, 2, 3, 4, 5).required(),
  descricao: Joi.string().max(255),
});
