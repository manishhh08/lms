import express from "express";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  createNewUser,
  deleteUser,
  getAllUsersController,
  getUserDetail,
  updateRoleController,
  updateUserDetail,
} from "../controller/userController.js";
import { registerUserByAdmin } from "../controller/authController.js";
// import { getAllUsers } from "../models/users/UserModel.js";

const router = express.Router();

router.get("/admins", authMiddleware, isAdmin, getAllUsersController);

router.put("/admins/:id", authMiddleware, isAdmin, updateRoleController);

router.get("/detail", authMiddleware, getUserDetail);

router.delete("/:id", authMiddleware, isAdmin, deleteUser);

// router.post("/admins", authMiddleware, isAdmin, createNewUser);
router.post("/admins", authMiddleware, isAdmin, registerUserByAdmin);

router.put("/:id", authMiddleware, updateUserDetail);

export default router;
