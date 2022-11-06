import { SocialMedia, Users } from "../models/index.js";

export const createSocialMedia = async (req, res) => {
  const user = req.user;
  const { name, social_media_url } = req.body;

  try {
    await SocialMedia.create({
      name: name,
      social_media_url: social_media_url,
      userId: user.id,
    }).then((data) => {
      res.status(201).send({ social_media: data });
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

export const showSocialMedias = async (req, res) => {
  try {
    await SocialMedia.findAll({
      attributes: [
        "id",
        "name",
        "social_media_url",
        "userId",
        "createdAt",
        "updatedAt",
      ],
      include: [
        {
          model: Users,
          attributes: ["id", "username", "profile_image_url"],
        },
      ],
    }).then((data) => {
      res.status(200).send({ social_medias: data });
    });
  } catch (e) {
    res.status(400).send({
      status: "error",
      message: e,
    });
  }
};

// export const updateSocialMedia = async (req, res) => {
//   const { photoId } = req.params;
//   const user = req.user;
//   const { title, caption, poster_image_url } = req.body;

//   try {
//     await Photos.findOne({
//       where: { id: photoId, userId: user.id },
//     }).then((data) => {
//       if (!data) {
//         res
//           .status(401)
//           .send({ status: "error", message: "photo doesn't exist" });
//         return;
//       }
//     });
//     await Photos.update(
//       {
//         title: title,
//         caption: caption,
//         poster_image_url: poster_image_url,
//       },
//       { where: { id: photoId, userId: user.id } }
//     ).then(async (data) => {
//       if (data[0] === 1) {
//         await Photos.findOne({
//           where: { id: photoId, userId: user.id },
//         }).then((data) => {
//           if (!data) {
//             res
//               .status(401)
//               .send({ status: "error", message: "photo doesn't exist" });
//             return;
//           }
//           res.status(200).send({
//             photo: data,
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
// };

// export const deleteSocialMedia = async (req, res) => {
//   const { photoId } = req.params;
//   const user = req.user;

//   try {
//     await Photos.findOne({
//       where: { id: photoId, userId: user.id },
//     }).then((data) => {
//       if (!data) {
//         res
//           .status(401)
//           .send({ status: "error", message: "photo doesn't exist" });
//         return;
//       }
//     });
//     await Photos.destroy({
//       where: { id: photoId, userId: user.id },
//       // truncate: true,
//     }).then((data) => {
//       if (data === 1) {
//         res.status(200).send({
//           message: "Your photo has been successfully deleted",
//         });
//       }
//     });
//   } catch (e) {
//     res.status(400).send({
//       status: "error",
//       message: e,
//     });
//   }
// };
