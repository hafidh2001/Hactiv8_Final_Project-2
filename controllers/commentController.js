import { Comments, Users, Photos } from "../models/index.js";

export const createComment = async (req, res) => {
  const user = req.user;
  const { photoId, comment } = req.body;
  try {
    if (!photoId) {
      res.status(401).send({ status: "error", message: "photoId is required" });
      return;
    }
    await Photos.findOne({
      where: { id: Number(photoId) },
    }).then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ status: "error", message: "photo doesn't exist" });
        return;
      }
    });
    await Comments.create({
      photoId: Number(photoId),
      comment: comment,
      userId: user.id,
    }).then((data) => {
      res.status(201).send({ comment: data });
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

export const showComments = async (req, res) => {
  try {
    await Comments.findAll({
      attributes: [
        "id",
        "userId",
        "photoId",
        "comment",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: Photos,
          attributes: ["id", "title", "caption", "poster_image_url"],
        },
        {
          model: Users,
          attributes: ["id", "username", "profile_image_url", "phone_number"],
        },
      ],
      order: [["createdAt", "ASC"]],
    }).then((data) => {
      res.status(200).send({ comments: data });
    });
  } catch (e) {
    res.status(400).send({
      status: "error",
      message: e,
    });
  }
};

export const updateComment = async (req, res) => {
  //   const { socialMediaId } = req.params;
  //   const user = req.user;
  //   const { name, social_media_url } = req.body;
  //   try {
  //     await SocialMedia.findOne({
  //       where: { id: socialMediaId, userId: user.id },
  //     }).then((data) => {
  //       if (!data) {
  //         res
  //           .status(401)
  //           .send({ status: "error", message: "social media doesn't exist" });
  //         return;
  //       }
  //     });
  //     await SocialMedia.update(
  //       {
  //         name: name,
  //         social_media_url: social_media_url,
  //       },
  //       { where: { id: socialMediaId, userId: user.id } }
  //     ).then(async (data) => {
  //       if (data[0] === 1) {
  //         await SocialMedia.findOne({
  //           where: { id: socialMediaId, userId: user.id },
  //         }).then((data) => {
  //           if (!data) {
  //             res
  //               .status(401)
  //               .send({ status: "error", message: "social media doesn't exist" });
  //             return;
  //           }
  //           res.status(200).send({
  //             social_media: data,
  //           });
  //         });
  //       }
  //     });
  //   } catch (e) {
  //     res.status(400).send({
  //       status: "error",
  //       field: e.errors[0].path,
  //       value: e.errors[0].value,
  //       message: e.errors[0].message,
  //     });
  //   }
};

export const deleteComment = async (req, res) => {
  //   const { socialMediaId } = req.params;
  //   const user = req.user;
  //   try {
  //     await SocialMedia.findOne({
  //       where: { id: socialMediaId, userId: user.id },
  //     }).then((data) => {
  //       if (!data) {
  //         res
  //           .status(401)
  //           .send({ status: "error", message: "social media doesn't exist" });
  //         return;
  //       }
  //     });
  //     await SocialMedia.destroy({
  //       where: { id: socialMediaId, userId: user.id },
  //       // truncate: true,
  //     }).then((data) => {
  //       if (data === 1) {
  //         res.status(200).send({
  //           message: "Your social media has been successfully deleted",
  //         });
  //       }
  //     });
  //   } catch (e) {
  //     res.status(400).send({
  //       status: "error",
  //       message: e,
  //     });
  //   }
};
