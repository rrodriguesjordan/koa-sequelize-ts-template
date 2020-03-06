import dotenv from 'dotenv';
import Joi from '@hapi/joi';

dotenv.config();

export type Environment = 'test' | 'development' | 'production';

class Config {
  readonly databaseURI: string;

  readonly env: Environment;

  readonly port: number;

  readonly jwtSecret: string;

  constructor() {
    const envSchema = Joi.object({
      NODE_ENV: Joi.string().allow('development', 'production', 'test'),
      PORT: Joi.number(),
      DB_URI: Joi.string(),
      JWT_SECRET: Joi.string()
    })
      .unknown()
      .required();

    const { error, value: envVars } = envSchema.validate(process.env);

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    this.databaseURI = envVars.DB_URI;
    this.env = envVars.NODE_ENV;
    this.port = envVars.PORT;
    this.jwtSecret = envVars.JWT_SECRET;
  }
}

const config = new Config();

export default config;
