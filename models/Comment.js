import db from "../db/database.js";
import { DataTypes } from "sequelize";

export default Comments = db.define("comments", {
  //   id: {
  //     type: ,
  //     allowNull: false,
  //   },
  //   UserId: {
  //     type: Foreign Key of User Table,
  //     allowNull: false,
  //   },
  //   PhotoId: {
  //     type: Foreign Key of Photo Table,
  //     allowNull: false,
  //   },
  comment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
