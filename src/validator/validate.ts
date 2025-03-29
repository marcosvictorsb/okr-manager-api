import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

export const validate = (schema: ObjectSchema) => {
  return (request: Request, response: Response, next: NextFunction) => {
    const { error } = schema.validate({
      ...request.body,
      ...request.query,
      ...request.params
    }, { abortEarly: false });
    if (error) {
      return response.status(400).json({
        message: 'Os dados fornecidos são inválidos',
        details: error.details.map((detail) => detail.message),
      });
    }
    next();
  };
};