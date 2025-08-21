import express from "express";
import {
  createBook,
  fetchAllBooks,
  fetchBooks,
} from "../controller/bookController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { createBookValidation } from "../middleware/joiMiddleware.js";
import { updateBook } from "../models/books/BookModel.js";

const router = express.Router();

router.get("/pub-books", fetchBooks);

router.get("/:id", fetchBooks);

router.get("/", authMiddleware, isAdmin, fetchAllBooks);

// router.post("/", createBookValidation, authMiddleware, isAdmin, createBook);

router.put("/:id", authMiddleware, isAdmin, updateBook);
export default router;
