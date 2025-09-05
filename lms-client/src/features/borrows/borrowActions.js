import { fetchAllPublicBooksAction } from "../books/bookAction";
import { borrowBookApi, fetchBorrowApi, returnBookApi } from "./borrowApi";
import { setBorrows } from "./borrowSlice";

export const borrowBookAction = (borrowObject) => async (dispatch) => {
  // create book api
  let data = await borrowBookApi(borrowObject);
  //   update the public books
  dispatch(fetchAllPublicBooksAction());

  if (data.status == "success") {
    return data;
  } else {
    return false;
  }
};

// fetch current user borrow
export const fetchBorrowAction = () => async (dispatch) => {
  let data = await fetchBorrowApi();
  // console.log(data);
  dispatch(setBorrows(data.borrows));
};

// return action
export const returnBookAction = (borrowId) => async (dispatch) => {
  let data = await returnBookApi(borrowId);

  if (data.status == "success") {
    dispatch(fetchBorrowAction());
    dispatch(fetchAllPublicBooksAction());
  }
};
