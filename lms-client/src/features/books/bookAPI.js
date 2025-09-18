import { apiProcessor } from "../../utils/axiosHelper";

const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

// book api
//add new book
export const getBook = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/books`,
    isPrivate: true,
  });
};

export const getAllBooksApi = async (pubBook = false) => {
  return apiProcessor({
    method: "GET",
    url: pubBook ? `${apiUrl}/books/pub-books` : `${apiUrl}/books`,
    isPrivate: !pubBook,
  });
};

export const addNewBook = async (bookObj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/books`,
    data: bookObj,
    isPrivate: true,

    contentType: "multipart/form-data",
  });
};

export const updateBookApi = async ({ _id, ...bookObj }) => {
  return apiProcessor({
    method: "Put",
    url: `${apiUrl}/books/${_id}`,
    isPrivate: true,
    data: bookObj,
  });
};

export const deleteBookApi = async (_id) => {
  // console.log("bookid", _id);
  return apiProcessor({
    method: "DELETE",
    url: `${apiUrl}/books/${_id}`,
    isPrivate: true,
  });
};
