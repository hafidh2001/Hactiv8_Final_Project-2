import { Router } from "express";

const router = Router();

// make route
router.get("/", (req, res) => {
  res.send("Hactive8 - Final Project 2");
});

export default router;
