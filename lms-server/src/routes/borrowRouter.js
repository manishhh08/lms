import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  createBorrow,
  fetchAllBorrows,
  returnBook,
} from "../controller/borrowController.js";

const router = express.Router();

// create borrow
router.post("/", authMiddleware, createBorrow);

router.put("/return/:id", authMiddleware, returnBook);

// fetch current user borrow
router.get("/", authMiddleware, fetchAllBorrows);

export default router;
