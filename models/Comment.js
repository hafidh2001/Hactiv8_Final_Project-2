// import db from "../db/database.js";
// import { DataTypes } from "sequelize";
// import Users from "./User.js";
// import Photos from "./Photo.js";

// const Comments = db.define("comments", {
//   userId: {
//     references: {
//       type: DataTypes.INTEGER,
//       model: Users,
//       key: "id",
//       onDelete: "CASCADE",
//       onUpdate: "RESTRICT",
//     },
//     allowNull: false,
//   },
//   photoId: {
//     references: {
//       type: DataTypes.INTEGER,
//       model: Photos,
//       key: "id",
//       onDelete: "CASCADE",
//       onUpdate: "RESTRICT",
//     },
//     allowNull: false,
//   },
//   comment: {
//     type: DataTypes.TEXT,
//     allowNull: false,
//     validate: {
//       notEmpty: true,
//       notNull: true,
//     },
//   },
//   createdAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
//   updatedAt: {
//     type: DataTypes.DATE,
//     allowNull: false,
//   },
// });

// // Comments.belongsTo(Users, {
// //   foreignKey: {
// //     name: "userId",
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //   },
// //   onDelete: "CASCADE",
// //   onUpdate: "RESTRICT",
// // });

// // Comments.belongsTo(Photos, {
// //   foreignKey: {
// //     name: "photoId",
// //     type: DataTypes.INTEGER,
// //     allowNull: false,
// //   },
// //   onDelete: "CASCADE",
// //   onUpdate: "RESTRICT",
// // });

// export default Comments;
