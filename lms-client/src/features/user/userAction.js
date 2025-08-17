import {
  deleteAccessToken,
  deleteRefreshToken,
  storeAccessToken,
  storeRefreshToken,
  storeToken,
} from "../../utils/storageFunction";
import { fetchUserDetail, loginUser } from "./userAPI";
import { setUser } from "./userSlice";

export const getUserDetail = () => async (dispatch) => {
  let data = await fetchUserDetail();

  if (data.status === "success") {
    //update the store
    dispatch(setUser(data.user));
  }
  return { status: data.status, message: data.message };
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
