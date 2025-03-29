import Joi from 'joi'

export const createObjectiveSchema = Joi.object({
  name: Joi.string().required(),
  quarter: Joi.string().valid('q1', 'q2', 'q3', 'q4').required(),
  year: Joi.number().integer().min(1000).max(9999).required(),
  id_company: Joi.number().required(),
  id_team: Joi.number().required(),
})

