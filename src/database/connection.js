import { createPool } from "mysql2/promise";
import env from "env-var";
import { config } from "dotenv";
config();

export const PORT = env.get("PORT").required().asPortNumber() || 3000;
const configenv = {
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: env.get("DB_PORT").asPortNumber(),
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "jefernne",
  DN_DATABASE: process.env.DN_DATABASE || "appbroker",
};

export const pool = createPool({
  host: configenv.DB_HOST,
  port: configenv.DB_PORT,
  database: configenv.DN_DATABASE,
  user: configenv.DB_USER,
  password: configenv.DB_PASSWORD,
});
