import axios from "axios";
import { apiProcessor } from "../../utils/axiosHelper";

const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

//User APIs
// create user
export const createUser = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/auth/register`,
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
export const fetchUserDetail = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/user/detail`,
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

// refresh token
export const refreshTokenApi = () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/refresh-token`,
    isPrivate: true,
    isRefresh: true,
  });
};
