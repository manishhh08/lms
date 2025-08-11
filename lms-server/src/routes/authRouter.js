import express from "express";
import {
  loginUser,
  registerUser,
  verifyEmail,
} from "../controller/authController.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/verify-email", verifyEmail);

export default router;
