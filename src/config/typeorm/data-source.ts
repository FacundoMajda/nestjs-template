import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const DataSourceConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'db_name',
  entities: [
    //estructura actual del proyecto
    __dirname + '/../../schematics/**/**/entities/*.entity{.ts,.js}',
    __dirname + '/../../schematics/**/entities/*.entity{.ts,.js}',
  ],
  migrations:
    process.env.NODE_ENV === 'production'
      ? ['dist/migration/*.js']
      : [__dirname + '/../../migration/*{.ts,.js}'],
  logging: true,
  synchronize: true,
  migrationsRun: true,
  // dropSchema: true,
};

export const AppDataSource = new DataSource(DataSourceConfig);
