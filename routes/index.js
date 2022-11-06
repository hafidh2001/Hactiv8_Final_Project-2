import { Router } from "express";
import userRoutes from "./userRoutes.js";
import photoRoutes from "./photoRoutes.js";
import socialmediaRoutes from "./socialmediaRoutes.js";
import { authentication } from "../middlewares/authentication.js";

const router = Router();

// make route
router.get("/", (req, res) => {
  res.send("Hactive8 - Final Project 2");
});

// create same-endpoint
router.use("/users", userRoutes);
router.use("/photos", authentication, photoRoutes);
router.use("/socialmedias", authentication, socialmediaRoutes);

export default router;
