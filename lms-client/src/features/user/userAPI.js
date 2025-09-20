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

// create user from admin side
export const createUserByAdmin = async (obj) => {
  return apiProcessor({
    method: "post",
    url: `${apiUrl}/user/admins`,
    isPrivate: true,
    data: obj,
  });
};
//get all user detail for admin
export const fetchAllUserDetail = async () => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/user/admins`,
    isPrivate: true,
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
//update user role
export const updateUserRole = async ({ _id, ...userObj }) => {
  return apiProcessor({
    method: "put",
    url: `${apiUrl}/user/admins/${_id}`,
    isPrivate: true,
    data: userObj,
  });
};
//delete user
export const removeUser = async (_id) => {
  return apiProcessor({
    method: "DELETE",
    url: `${apiUrl}/user/${_id}`,
    isPrivate: true,
  });
};
// verify user
export const verifyUser = async (token, email) => {
  return apiProcessor({
    method: "get",
    url: `${apiUrl}/auth/verify-email?t=${token}&email=${email}`,
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
