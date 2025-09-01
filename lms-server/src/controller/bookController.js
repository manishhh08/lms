import {
  getAllBooks,
  insertBook,
  updateBookById,
} from "../models/books/BookModel.js";
import cloudinary from "cloudinary";

export const fetchBooks = async (req, res, next) => {
  try {
    let books = await getAllBooks({ status: "active" });
    return res.json({
      status: "success",
      message: books.length + "Books found",
      books,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Book fetch failed",
    });
  }
};

export const fetchAllBooks = async (req, res, next) => {
  try {
    let books = await getAllBooks({});
    return res.json({
      status: "success",
      message: books.length + " Books found",
      books,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Book fetch failed!",
    });
  }
};

// create book
export const createBook = async (req, res, next) => {
  try {
    //cloudinary image upload
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    const result = await cloudinary.uploader.upload(
      "assets/" + req.file.filename,
      options
    );

    console.log(111, result);

    req.body.thumbnail = result?.secure_url;
    // add book
    // console.log(req.body);
    let book = await insertBook(req.body);

    return res.json({
      status: "success",
      message: "Book created",
      book,
    });
  } catch (err) {
    console.log(err);
    let message = "Book creation Failed!";
    let statusCode = 500;
    if (err.message.includes("E11000")) {
      message = message + err.message;
      statusCode = 400;
    }
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  }
};

//update book
// update book
export const updateBook = async (req, res, next) => {
  try {
    //id
    let id = req.params.id;
    // add book
    let book = await updateBookById(id, req.body);
    return res.json({
      status: "success",
      message: "Book Update",
      book,
    });
  } catch (err) {
    console.log(err);
    let message = "Book Update Failed!";
    let statusCode = 500;
    if (err.message.includes("E11000")) {
      message = message + err.message;
      statusCode = 400;
    }
    return res.status(statusCode).json({
      status: "error",
      message,
    });
  }
};
