import {
  deleteAccessToken,
  deleteRefreshToken,
  storeToken,
} from "../../utils/storageFunction";
import { fetchAllUserDetail, fetchUserDetail, loginUser } from "./userAPI";
import { setAllUsers, setUser } from "./userSlice";

export const getUserDetail = () => async (dispatch) => {
  let data = await fetchUserDetail();

  if (data.status === "success") {
    //update the store
    dispatch(setUser(data.user));
  }
  return { status: data.status, message: data.message };
};

export const getAllUserAction = () => async (dispatch) => {
  let data = await fetchAllUserDetail();

  if (data.status === "success") {
    //update the store
    dispatch(setAllUsers(data?.users || []));
  }
};

export const loginUserAction = (form) => async (dispatch) => {
  let data = await loginUser(form);

  // if success then
  if (data.status === "success") {
    // accessToken store
    storeToken(data.accessToken, "access");
    // refreshToken store
    storeToken(data.refreshToken, "refresh");
    // retrieve user detail
    dispatch(getUserDetail());
  }
  return { status: data.status, message: data.message };
};

export const logoutAction = () => (dispatch) => {
  dispatch(setUser({}));
  deleteAccessToken();
  deleteRefreshToken();
};
