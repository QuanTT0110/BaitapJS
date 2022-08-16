import "reflect-metadata"
import { DataSource } from "typeorm"
import  {staff}  from "../entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "hungpro10a3",
    database: "training",
    synchronize: true,
    logging: true,
    entities: [staff],
    subscribers: [],
    migrations: [],
})


export default AppDataSource