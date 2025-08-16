import express from "express";
import { loginUser, registerUser } from "../controller/authController.js";
import { refreshMiddleware } from "../middleware/authMiddleware.js";
import { createAccessToken } from "../utils/jwt.js";

const router = express.Router();

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/refresh-token", refreshMiddleware, (req, res) => {
  let payload = { email: req.user.email };

  let accessToken = createAccessToken(payload);

  return res.send({
    status: "success",
    message: "Refresh token generated",
    accessToken,
  });
});
// router.get("/verify-email", verifyEmail);

export default router;
