import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bookReducer from "../features/books/bookSlice";
import borrowReducer from "../features/borrow/borrowSlice";
export default configureStore({
  reducer: {
    userStore: userReducer,
    bookStore: bookReducer,
    borrowStore: borrowReducer,
  },
});
