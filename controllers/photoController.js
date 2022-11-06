import { Photos, Users, Comments } from "../models/index.js";

export const createPhoto = async (req, res) => {
  const user = req.user;
  const { title, caption, poster_image_url } = req.body;

  try {
    await Photos.create({
      title: title,
      caption: caption,
      poster_image_url: poster_image_url,
      userId: user.id,
    }).then((data) => {
      delete data.dataValues.createdAt;
      delete data.dataValues.updatedAt;
      res.status(201).send(data);
    });
  } catch (e) {
    res.status(400).send({
      status: "error",
      field: e.errors[0].path,
      value: e.errors[0].value,
      message: e.errors[0].message,
    });
  }
};

export const showPhotos = async (req, res) => {
  try {
    await Photos.findAll({
      attributes: [
        "id",
        "title",
        "caption",
        "poster_image_url",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: Comments,
          attributes: ["comment"],
        },
        {
          model: Users,
          attributes: ["id", "username", "profile_image_url"],
        },
      ],
    }).then((data) => {
      res.status(200).send({ photos: data });
    });
  } catch (e) {
    res.status(400).send({
      status: "error",
      message: e,
    });
  }
};
