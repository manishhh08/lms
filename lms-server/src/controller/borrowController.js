import { updateBookById } from "../models/books/BookModel.js";
import {
  getAllBorrows,
  getBorrowById,
  insertBorrow,
} from "../models/borrows/BorrowModel.js";

export const createBorrow = async (req, res, next) => {
  try {
    const userId = req.user._id;
    // console.log(userId);

    const { bookId } = req.body || {};
    // const { bookId } = req.body;

    console.log("1112", bookId);
    const currentDate = new Date();
    const expectedDate = new Date(currentDate);
    expectedDate.setDate(currentDate.getDate() + 15);

    let bookData = await updateBookById(bookId, {
      isAvailable: false,
      expectedAvailable: expectedDate,
    });

    let borrowObject = {
      userId,
      bookId,
      bookTitle: bookData?.bookTitle,
      thumbnail: bookData?.thumbnail,
      dueDate: expectedDate,
    };

    let borrow = await insertBorrow(borrowObject);

    return res.json({
      status: "success",
      message: "Book Borrowed",
      borrow,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Borrow creation failed!",
    });
  }
};

export const fetchAllBorrows = async (req, res, next) => {
  try {
    let borrows = await getAllBorrows({ userId: req.user._id });

    return res.json({
      status: "success",
      message: "Borrow List fetched!",
      borrows,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Borrow fetch failed!",
    });
  }
};

// return book controller
export const returnBook = async (req, res, next) => {
  try {
    // borrow id
    let borrowId = req.params.id;

    let borrowData = await getBorrowById(borrowId);

    if (borrowData) {
      // if found borrow
      borrowData.status = "returned";
      borrowData.returnDate = new Date();
      let bookId = borrowData.bookId;

      let bookData = await updateBookById(bookId, {
        isAvailable: true,
      });

      borrowData.save();

      return res.json({
        status: "success",
        message: "Book returned",
      });
    } else {
      return res.json({
        status: "error",
        message: "Borrow record not found",
      });
    }
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Book returned failed!",
    });
  }
};
