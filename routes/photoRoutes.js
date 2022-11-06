import { createPhoto, showPhotos } from "../controllers/photoController.js";
import { Router } from "express";

const router = Router();

router.post("/", createPhoto);
router.get("/", showPhotos);

export default router;
