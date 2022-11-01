// import { getAll, storeUser, checkUser } from "../models/User.js";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";
import Users from "../models/User.js";
import Photos from "../models/Photo.js";
import { hash } from "../helpers/bcrypt.js";

export const showPhotos = async (req, res) => {
  await Photos.findAll({
    attributes: [
      ["id", "no"],
      "title",
      "caption",
      "poster_image_url",
      "userId",
    ],
    include: {
      model: Users,
      attributes: ["full_name", "email"],
    },
  }).then((data) => {
    res.status(200).send(data);
  });
};

export const createPhoto = async (req, res) => {
  const { title, caption, poster_image_url, userId } = req.body;

  try {
    await Photos.create({
      title: title,
      caption: caption,
      poster_image_url: poster_image_url,
      userId: userId,
    }).then((data) => {
      res.status(201).send(data);
    });
  } catch (e) {
    res.send({
      status: "error",
      field: e.errors[0].path,
      value: e.errors[0].value,
      message: e.errors[0].message,
    });
  }
};
