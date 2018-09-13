import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { Joi } from '../@common/utils';
import { configSchema } from './config.schema';

type configValue = string|number|object|string[];
export interface EnvConfig {
  [prop: string]: configValue;
}

export class ConfigService {
  private readonly config: { [prop: string]: configValue };

  constructor(filePath: string) {
    const envConfig = dotenv.parse(fs.readFileSync(filePath));
    this.config = this.validateConfig(envConfig);
  }

  get(key: string): configValue {
    return this.config[key];
  }

  /**
   * Ensures all needed variables are set, and returns the validated JavaScript object
   * including the applied default values.
   */
  private validateConfig(config: EnvConfig): EnvConfig {
    // Schema
    const configVarsSchema: Joi.ObjectSchema = Joi.object(configSchema);

    // Options
    const validateOption = {
      // I18n
      locale: 'zh-CN',
      // 不返回未声明的字段
      stripUnknown: true,
    };

    const { error, value: validatedEnvConfig } = Joi.validate(
      config,
      configVarsSchema,
      validateOption,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }
    return validatedEnvConfig;
  }
}
