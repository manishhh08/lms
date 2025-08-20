import { apiProcessor } from "../../utils/axiosHelper";

const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

// book api
//add new book
export const getBook = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/book`,
    isPrivate: true,
  });
};

export const addNewBook = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/book/add-book`,
    data: obj,
    isPrivate: true,
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
