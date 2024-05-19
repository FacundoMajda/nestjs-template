// import { mailerConfig } from 'src/core/mail/config/mailer.config';
export type TYPE_DB =
  | 'mysql'
  | 'mariadb'
  | 'mongodb'
  | 'postgres'
  | 'mssql'
  | 'oracle';

export interface Environments {
  port?: number;
  proxyEnabled?: boolean;
  frontEndUrl?: string;
  frontEndUrlVerifyMail?: string;
  frontEndUrlForgotPassword?: string;
  accessTokenSecret?: string;
  accessTokenExpiration?: number;
  refreshTokenSecret?: string;
  refreshTokenExpiration?: number;
  refreshCodeExpiration?: number;
  codeTokenSecret?: string;
  codeTokenExpiration?: number;
  jwt?: string;
  node_env?: string;
  google?: {
    clientId: string;
    secret: string;
    redirectUrl: string;
  };
  mysql?: {
    type: TYPE_DB;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  mailerConfig?: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      user: string;
      pass: string;
    };
    defaultFrom: string;
  };
  ftp?: {
    host: string;
    port: number;
    user: string;
    password: string;
  };
  urlImages?: {
    baseUrl: string;
    relativePath: string;
  };
}
