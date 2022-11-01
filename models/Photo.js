import db from "../db/database.js";
import { DataTypes } from "sequelize";
// import Comments from "./Comment.js";
import Users from "./User.js";

const Photos = db.define(
  "photos",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        max: 255,
      },
    },
    caption: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    poster_image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
        notNull: true,
      },
    },
    userId: {
      field: "userid",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      field: "createdat",
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      field: "updatedat",
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

// Photos.belongsTo(Users, {
//   foreignKey: {
//     field: "userid",
//     name: "userId",
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   onDelete: "CASCADE",
//   onUpdate: "RESTRICT",
// });

// Photos.belongsToMany(
//   Users,
//   { through: Comments },
//   {
//     foreignKey: {
//       name: "photoId",
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     onDelete: "CASCADE",
//     onUpdate: "RESTRICT",
//   }
// );

export default Photos;
