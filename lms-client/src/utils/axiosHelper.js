import axios from "axios";
const apiUrl = process.env.VITE_APP_API_URL + "/api/v1";

// axios helper function to handle API requests
export const apiProcessor = async ({ method, data, url, isPrivate }) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? { Authorization: localStorage.getItem("accessToken") }
        : {},
    });

    return response.data;
  } catch (err) {
    return {
      status: false,
      message:
        err?.response?.data?.message ||
        "An error occurred while processing your request.",
    };
  }
};

//User APIs
// create user
export const createUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth`,
    data: obj,
  });
};

// login user
export const loginUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/login`,
    data: obj,
  });
};

//get user detail
export const getUserDetail = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/user`,
    isPrivate: true,
  });
};
// verify user
export const verifyUser = async (token, email) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/verify-email?t=${token}&email=${email}`,
    isPrivate: false,
  });
};
