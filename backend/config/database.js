import { Sequelize } from "sequelize";

const db = new Sequelize("intern_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
