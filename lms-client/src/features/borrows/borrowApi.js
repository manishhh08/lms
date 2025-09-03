import { apiProcessor } from "../../utils/axiosHelper";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

export const borrowBookApi = async (borrowObject) => {
  return apiProcessor({
    method: "POST",
    url: `${apiUrl}/borrows`,
    data: borrowObject,
    isPrivate: true,
  });
};

export const updateBorrowApi = async ({ borrowId, ...rest }) => {
  return apiProcessor({
    method: "PATCH",
    url: `${apiUrl}/borrows/${borrowId}`,
    data: rest,
    isPrivate: true,
  });
};

export const fetchBorrowApi = async () => {
  return apiProcessor({
    method: "GET",
    url: `${apiUrl}/borrows`,
    isPrivate: true,
  });
};

export const returnBookApi = async (borrowId) => {
  return apiProcessor({
    method: "Put",
    url: `${apiUrl}/borrows/return/${borrowId}`,
    isPrivate: true,
  });
};
