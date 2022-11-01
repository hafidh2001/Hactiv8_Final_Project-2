import db from "../db/database.js";
import { DataTypes } from "sequelize";
import Photos from "./Photo.js";
// import Comments from "./Comment.js";
// import SocialMedia from "./SocialMedia.js";

const Users = db.define(
  "users",
  {
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        max: 255,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
        notNull: true,
        max: 255,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        notNull: true,
        max: 255,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        max: 255,
      },
    },
    profile_image_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isUrl: true,
        notEmpty: true,
        notNull: true,
      },
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: true,
        notNull: true,
        max: 3,
      },
    },
    phone_number: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        isNumeric: true,
        notEmpty: true,
        notNull: true,
        max: 13,
      },
    },
    createdAt: {
      field: "createdat",
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      field: "createdat",
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

Users.hasMany(Photos, {
  foreignKey: {
    field: "userid",
    name: "userId",
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "RESTRICT",
});

Photos.belongsTo(Users, {
  foreignKey: {
    field: "userid",
    name: "userId",
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  onDelete: "CASCADE",
  onUpdate: "RESTRICT",
});

// Users.belongsToMany(
//   Photos,
//   { through: Comments },
//   {
//     foreignKey: {
//       name: "userId",
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     onDelete: "CASCADE",
//     onUpdate: "RESTRICT",
//   }
// );

// Users.hasMany(SocialMedia, {
//   foreignKey: {
//     name: "userId",
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   onDelete: "CASCADE",
//   onUpdate: "RESTRICT",
// });

export default Users;
