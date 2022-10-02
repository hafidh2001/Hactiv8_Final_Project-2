import db from "../db/database.js";
import { DataTypes } from "sequelize";

export default Photos = db.define("photos", {
  //   id: {
  //     type: ,
  //     allowNull: false,
  //   },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  caption: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  poster_img_url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  //   UserId: {
  //     type: Foreign Key of User Table,
  //     allowNull: false,
  //   },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});
