import { Router } from "express";
import userRoutes from "./userRoutes.js";
import photoRoutes from "./photoRoutes.js";
import { checkCredential } from "../middlewares/checkCredentials.js";

const router = Router();

// make route
router.get("/", (req, res) => {
  res.send("Hactive8 - Final Project 2");
});

// create same-endpoint
router.use("/users", userRoutes);
// router.use("/photos", checkCredential, () => {});
router.use("/photos", photoRoutes);

export default router;
