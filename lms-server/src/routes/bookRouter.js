import express from "express";
import {
  createBook,
  fetchAllBooks,
  fetchBooks,
} from "../controller/bookController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { createBookValidation } from "../middleware/joiMiddleware.js";

const router = express.Router();

router.get("/book", fetchBooks);

router.get("/getall", authMiddleware, isAdmin, fetchAllBooks);

router.post("/", createBookValidation, authMiddleware, isAdmin, createBook);

export default router;
