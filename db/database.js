import { node_env, database_url, database } from "../config.js";
import { Sequelize } from "sequelize";

const db =
  node_env === "production"
    ? new Sequelize(database_url)
    : new Sequelize(database.name, database.user, database.password, {
        host: database.host,
        dialect: "postgres",
      });

export default db;
