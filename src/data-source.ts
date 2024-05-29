import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    database: "react_node_app",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: [],
    subscribers: [],
})
