import { toast } from "react-toastify";
import { addNewBook, getAllBooksApi, getBook, updateBookApi } from "./bookAPI";
import { setBook, setPubBook } from "./bookSlice";

//get available books
export const fetchAllBooksAction = () => async (dispatch) => {
  let data = await getBook();
  dispatch(setBook(data?.books || []));
};

export const fetchAllPublicBooksAction = () => async (dispatch) => {
  let data = await getAllBooksApi(true);
  dispatch(setPubBook(data?.books || []));
};
export const createBookAction = (formData) => async (dispatch) => {
  // call api create book
  let data = await addNewBook(formData);
  toast[data.status](data.message);
  if (data.status == "success") {
    // update bookstore
    dispatch(fetchAllBooksAction());
  }

  return { ...data };
};

export const updateBookAction = (form) => async (dispatch) => {
  // call api create book
  let data = await updateBookApi(form);
  toast[data.status](data.message);
  if (data.status == "success") {
    // update bookstore
    dispatch(fetchAllBooksAction());
  }

  return { ...data };
};
