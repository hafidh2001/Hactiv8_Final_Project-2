import db from "../db/database.js";
import { DataTypes } from "sequelize";

export default SocialMedia = db.define("social_media", {
  //   id: {
  //     type: ,
  //     allowNull: false,
  //   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  social_media_url: {
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
