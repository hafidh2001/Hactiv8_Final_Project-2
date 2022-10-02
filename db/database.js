import { database } from "../config.js";
import { Sequelize } from "sequelize";

const db = new Sequelize(database.name, database.user, database.password, {
  host: database.host,
  dialect: "postgres",
});

export default db;
