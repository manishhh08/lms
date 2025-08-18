import Books from "./BookSchema.js";

// get all books
export const getAllBooks = () => {
  return Books.find();
};

// get book my name
export const getBooks = (filter) => {
  return Books.findOne(filter);
};

// add new book
export const addBook = (bookObj) => {
  return Books.insertOne(bookObj);
};

// delete single/multiple book
export const deleteBooks = (idsToDelete, bookId) => {
  return Books.deleteMany({
    _id: { $in: idsToDelete },
    bookId: bookId,
  });
};

// update book detail
// export const updateBook=(bid)
