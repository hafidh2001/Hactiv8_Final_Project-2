// import library
import dotenv from "dotenv";

// use dotenv
dotenv.config();

const port = process.env.PORT;
const node_env = process.env.NODE_ENV;
const database_url = process.env.DATABASE_URL;
const database = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
};
const jwt_secret = process.env.JWT_SECRET;

export { port, database_url, node_env, database, jwt_secret };
