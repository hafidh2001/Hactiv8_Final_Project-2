// import { getAll, storeUser, checkUser } from "../models/User.js";
import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";
import Users from "../models/User.js";
import Photos from "../models/Photo.js";
import { hash } from "../helpers/bcrypt.js";

export const showUser = async (req, res) => {
  await Users.findAll({
    attributes: [
      ["id", "no"],
      "full_name",
      "email",
      "username",
      "password",
      "profile_image_url",
      "age",
      "phone_number",
    ],
    include: { model: Photos },
    order: [["createdAt", "DESC"]],
  }).then((data) => {
    res.status(200).send(data);
  });
  // await Users.findAll({
  //   attributes: [
  //     ["id", "no"],
  //     "full_name",
  //     "email",
  //     "username",
  //     "password",
  //     "profile_image_url",
  //     "age",
  //     "phone_number",
  //   ],
  // }).then((data) => {
  //   res.status(200).send(data);
  // });
};

export const registerUser = async (req, res) => {
  const {
    full_name,
    email,
    username,
    password,
    profile_image_url,
    age,
    phone_number,
  } = req.body;

  try {
    const hash_password = await hash(password);

    await Users.create({
      full_name: full_name,
      email: email,
      username: username,
      password: hash_password,
      profile_image_url: profile_image_url,
      age: age,
      phone_number: phone_number,
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

export const loginUser = async (req, res) => {
  //   const { email, password } = req.body;
  //   checkUser(email, password).then((data) => {
  //     if (data.status !== "error") {
  //       const payload = data?.res;
  //       const token = jwt.sign({ ...payload }, jwt_secret, { expiresIn: "24h" });
  //       res.json({ ...data, token: token });
  //     } else {
  //       res.json(data);
  //     }
  //   });
};

export const updateUser = async (req, res) => {};

export const deleteUser = async (req, res) => {};
