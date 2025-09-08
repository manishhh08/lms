import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import bookReducer from "../features/books/bookSlice";
import borrowReducer from "../features/borrows/borrowSlice";
import reviewReducer from "../features/reviews/reviewSlice";
export default configureStore({
  reducer: {
    userStore: userReducer,
    bookStore: bookReducer,
    borrowStore: borrowReducer,
    reviewStore: reviewReducer,
  },
});
