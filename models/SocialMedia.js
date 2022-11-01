// import db from "../db/database.js";
// import { DataTypes } from "sequelize";
// import Users from "./User.js";

// const SocialMedia = db.define("social_media", {
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//       notNull: true,
//       max: 255,
//     },
//   },
//   social_media_url: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       isUrl: true,
//       notEmpty: true,
//       notNull: true,
//     },
//   },
//   // userId: {
//   //   references: {
//   //     type: DataTypes.INTEGER,
//   //     model: Users,
//   //     key: "id",
//   //     onDelete: "CASCADE",
//   //     onUpdate: "RESTRICT",
//   //   },
//   //   allowNull: false,
//   // },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// });

// SocialMedia.belongsTo(Users, {
//   foreignKey: {
//     name: "userId",
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   onDelete: "CASCADE",
//   onUpdate: "RESTRICT",
// });

// export default SocialMedia;
