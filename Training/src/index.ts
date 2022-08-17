import "reflect-metadata"
import app from "./app"
import { DataSource } from "typeorm"
import  {Staff}  from "../src/entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "hungpro10a3",
    database: "training",
    synchronize: true,
    logging: true,
    entities: [Staff],
    subscribers: [],
    migrations: [],
})

async function main() {
    try {
        await AppDataSource.initialize();
        console.log("Database connected");
        app.listen(process.env.PORT , () => {
          console.log(`Server is running on PORT ${process.env.PORT}`);
        });
    }catch (err){
        console.error(err);
    }
}

main();
