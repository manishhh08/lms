import {
  deleteBookById,
  getAllBooks,
  getAllPublicBooks,
  insertBook,
  updateBookById,
} from "../models/books/BookModel.js";
import cloudinary from "cloudinary";
import sharp from "sharp";
import slugify from "slugify";
// import slugifyHelper from "../utils/slugifyHelper.js";
// import path from "path";
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
    let books = await getAllPublicBooks();
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
    const { bookTitle } = req.body;
    console.log(555555, bookTitle);
    const slug = slugify(bookTitle);
    console.log(slug);
    //save image in multiple sizes
    await sharp("assets/" + req.file.filename)
      .resize(200)
      .toFile("assets/resize-" + req.file.filename);

    //cloudinary image upload
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    if (!req.file) {
      return res.json({
        status: "error",
        message: "Please upload book image",
      });
    }
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };

    //size for images
    // const sizes = [
    //   { name: "small", width: 150, height: 120 },
    //   { name: "medium", width: 300, height: 220 },
    //   { name: "large", width: 600, height: 420 },
    // ];

    // let uploadedImages = {};

    // for (let size of sizes) {
    //   const localPath = path.join(
    //     "assest",
    //     `${size.name}- ${Date.now()}-${req.file.filename}`
    //   );
    // }

    //resize to save locally
    // await sharp("assets" / +req.file.filename)
    //   .resize(sizes.width, sizes.height)
    //   .toFile("assets/resize-" + req.file.filename);

    const result = await cloudinary.uploader.upload(
      "assets/" + req.file.filename,
      options
    );
    // const result = await cloudinary.uploader.upload(
    //   // "assets/" + req.file.filename,
    //   localPath,
    //   options
    // );

    // console.log(111, result);

    req.body.thumbnail = result?.secure_url;
    // req.body.slug = slugifyHelper(req.body.bookTitle);
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

// update book
export const updateBook = async (req, res, next) => {
  try {
    //id
    let id = req.params.id;
    // add book
    let book = await updateBookById(id, req.body);
    return res.json({
      status: "success",
      message: "Book Updated Successfully",
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

//delete book
export const deleteBook = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedBook = await deleteBookById(id);

    if (!deletedBook) {
      return res.status(404).json({
        status: "error",
        message: "Book not found",
      });
    }

    return res.json({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (err) {
    console.log(err);
    let message = "Book Delete Failed!";
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
