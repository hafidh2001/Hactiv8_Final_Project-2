import { node_env, database_url, database } from "../config.js";
import { Sequelize } from "sequelize";

const db =
  node_env === "production"
    ? new Sequelize(database_url)
    : new Sequelize(database.name, database.user, database.password, {
        host: database.host,
        dialect: "postgres",
        typeValidation: true,
      });

// {
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
//     },
//   },
//   typeValidation: true,
// }
export default db;
