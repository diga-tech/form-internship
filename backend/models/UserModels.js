import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const product_intern = db.define(
  "Product_intern",
  {
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    description: DataTypes.STRING,
    requirement: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    deadline: DataTypes.DATEONLY,
  },
  {
    freezeTableName: true,
  }
);

export default product_intern;

(async () => {
  await db.sync();
})();
