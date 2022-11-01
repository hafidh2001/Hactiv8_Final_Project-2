import {
  showUser,
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { Router } from "express";

const router = Router();

router.get("/", showUser);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.put("/:userid", updateUser);
router.delete("/:userid", deleteUser);

export default router;
