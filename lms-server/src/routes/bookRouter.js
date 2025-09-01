import express from "express";
import {
  createBook,
  fetchAllBooks,
  fetchBooks,
  updateBook,
} from "../controller/bookController.js";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import { createBookValidation } from "../middleware/joiMiddleware.js";
import { updateBookById } from "../models/books/BookModel.js";
import { upload } from "../middleware/multerConfig.js";

const router = express.Router();

router.get("/pub-books", fetchAllBooks);

// router.get("/:id", fetchBooks);

router.get("/", authMiddleware, isAdmin, fetchAllBooks);

router.post(
  "/",
  upload.single("image"),
  createBookValidation,
  authMiddleware,
  isAdmin,
  createBook
);

router.put("/:id", authMiddleware, isAdmin, updateBook);
export default router;
