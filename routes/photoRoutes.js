import { showPhotos, createPhoto } from "../controllers/photoController.js";
import { Router } from "express";

const router = Router();

router.get("/", showPhotos);
router.post("/", createPhoto);

export default router;
