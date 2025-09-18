import express from "express";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  getAllUsersController,
  getUserDetail,
  updateRoleController,
} from "../controller/userController.js";
// import { getAllUsers } from "../models/users/UserModel.js";

const router = express.Router();

router.get("/admins", authMiddleware, isAdmin, getAllUsersController);

router.put("/admins/:id", authMiddleware, isAdmin, updateRoleController);

router.get("/detail", authMiddleware, getUserDetail);

export default router;
