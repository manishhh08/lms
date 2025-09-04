import Books from "./BookSchema.js";

// // create book
// export const insertBook = (bookObj) => {
//   return Books(bookObj).save();
// };

// // get all book
// export const getAllBooks = (filterObj) => {
//   return Books.find(filterObj);
// };

// //update book
// export const updateBook = (_id, bookObj) => {
//   return Books.findByIdAndUpdate(_id, bookObj);
// };
// //delte book
// export const deleteBook = (_id) => {
//   return Books.findByIdAndDelete(_id);
// };

// create book
export const insertBook = (bookObj) => {
  return Books(bookObj).save();
};

// get all book
export const getAllBooks = (filterObj) => {
  return Books.find(filterObj);
};

//update book
export const updateBookById = (_id, bookObj) => {
  return Books.findByIdAndUpdate(_id, bookObj);
};
//delte book
export const deleteBookById = (_id) => {
  return Books.findByIdAndDelete(_id);
};
