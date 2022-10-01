import * as Joi from 'joi';

export const JoiValidationSchema = Joi.object({
  MONGODB: Joi.string().default('mongodb://localhost:27017/nest-vehiculum'),
  PORT: Joi.number().default(3001),
});
