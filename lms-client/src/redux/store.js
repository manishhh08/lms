import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bookReducer from "../features/books/bookSlice";
export default configureStore({
  reducer: {
    userStore: userReducer,
    bookStore: bookReducer,
  },
});
