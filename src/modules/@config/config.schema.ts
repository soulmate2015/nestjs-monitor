import { Joi } from '../@common/utils';

export const configSchema = {
  NODE_ENV: Joi.string()
    .valid(['development', 'production', 'test'])
    .default('development'),
  PROJECT_PORT: Joi.number().default(5000),
  API_AUTH_ENABLED: Joi.boolean().required(),
};
