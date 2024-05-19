import 'dotenv/config';
import { Environments, TYPE_DB } from './environment.interface';

const env = process.env;

export const environments: Environments = {
  port: Number(env.PORT || 3000),
  proxyEnabled: env.PROXY_ENABLED === 'true',
  frontEndUrl: env.FRONTEND_URL,
  frontEndUrlVerifyMail: env.VERIFY_EMAIL_URL,
  frontEndUrlForgotPassword: env.FRONTEND_FORGOT_PASSWORD_URL,
  accessTokenSecret: env.ACCESS_TOKEN_SECRET,
  accessTokenExpiration: Number(env.ACCESS_TOKEN_EXPIRATION),
  refreshTokenSecret: env.REFRESH_TOKEN_SECRET,
  refreshTokenExpiration: Number(env.REFRESH_TOKEN_EXPIRATION),
  codeTokenSecret: env.CODE_TOKEN_SECRET,
  codeTokenExpiration: Number(env.CODE_TOKEN_EXPIRATION),
  refreshCodeExpiration: Number(env.REFRESH_CODE_EXPIRATION),
  jwt: env.JWT_SECRET,
  node_env: env.NODE_ENV,
  google: {
    clientId: env.GOOGLE_CLIENT_ID,
    secret: env.GOOGLE_SECRET,
    redirectUrl: env.GOOGLE_CALLBACK,
  },
  mysql: {
    type: String(env.DB_CONNECTION) as TYPE_DB,
    host: env.MYSQLHOST,
    port: Number(env.MYSQLPORT),
    username: env.MYSQLUSER,
    password: env.MYSQLPASSWORD,
    database: env.MYSQLDATABASE,
  },
  mailerConfig: {
    host: env.MAIL_HOST,
    port: Number(env.MAIL_PORT),
    secure: env.MAIL_SECURE === 'true',
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PWD,
    },
    defaultFrom: env.MAIL_FROM,
  },
  urlImages: {
    baseUrl: env.BASE_URL_IMAGES,
    relativePath: env.RELATIVE_PATH_IMAGES,
  },
};
