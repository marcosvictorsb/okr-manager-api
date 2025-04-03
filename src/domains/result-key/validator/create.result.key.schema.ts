import Joi from "joi";

export const createResultKeySchema = Joi.object({
  name: Joi.string().required(),
  initial_value: Joi.number().required(),
  target_value: Joi.number().required(),
  current_value: Joi.number().required(),
  id_objective: Joi.number().required(),
  id_user: Joi.number().required(),
  id_company: Joi.number().required(),
})