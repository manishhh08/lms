import Borrow from "./BorrowSchema.js";

//get all users
export const getAllBorrows = (filter) => {
  return Borrow.find(filter);
};

//get borrow by ID
export const getBorrowById = (id) => {
  return Borrow.findById(id);
};

// //get user by email filter
// export const getUser = (filter) => {
//   return User.findOne(filter);
// };

//create  borrow history
export const insertBorrow = (borrowObj) => {
  return Borrow.insertOne(borrowObj);
};

//update borrow by ID
export const updateBorrowById = (id, borrowObj) => {
  return Borrow.findByIdAndUpdate(id, borrowObj);
};
