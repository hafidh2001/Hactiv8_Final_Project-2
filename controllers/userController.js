import jwt from "jsonwebtoken";
import { jwt_secret } from "../config.js";
import { hash } from "../helpers/bcrypt.js";
import { Users, Photos } from "../models/index.js";

export const showUser = async (req, res) => {
  try {
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
  } catch (e) {
    res.status(400).send({
      status: "error",
      message: e,
    });
  }
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
      delete data.id;
      delete data.createdAt;
      delete data.updatedAt;
      res.status(201).send({
        user: {
          full_name: data.full_name,
          email: data.email,
          username: data.username,
          profile_image_url: data.profile_image_url,
          age: data.age,
          phone_number: data.phone_number,
        },
      });
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
