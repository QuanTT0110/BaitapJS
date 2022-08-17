import "reflect-metadata";
import { DataSource, Repository } from "typeorm";
import { Staff } from "../entitys";

export default class DB {
  private static _appDataSource: DataSource;

  static setAppDataSource = (env: NodeJS.ProcessEnv) => {
    this._appDataSource = new DataSource({
      type: "postgres",
      host: env.POSTGRES_HOST,
      port: Number(env.POSTGRES_PORT),
      username: env.POSTGRES_USER,
      password: env.POSTGRES_PASSWORD,
      database: env.POSTGRES_DB,
      synchronize: true,
      logging: false,
      entities: [Staff],
      migrations: [],
      subscribers: [],
    });
  };

  static getAppDataSource = (): DataSource => {
    return this._appDataSource;
  };

  static getStaffRepository = (): Repository<Staff> => {
    return this._appDataSource.getRepository(Staff);
  };
}
