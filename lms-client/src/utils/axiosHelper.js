import axios from "axios";
import {
  getAccessToken,
  getRefreshToken,
  storeAccessToken,
} from "./storageFunction";
import { refreshTokenApi } from "../features/user/userAPI";
// const apiUrl = process.env.VITE_APP_API_URL + "/api/v1";

// axios helper function to handle API requests
export const apiProcessor = async ({
  method,
  data,
  url,
  isPrivate = false,
  isRefresh = false,
}) => {
  try {
    let response = await axios({
      method: method,
      url: url,
      data: data,
      headers: isPrivate
        ? { Authorization: isRefresh ? getRefreshToken() : getAccessToken() }
        : {},
    });

    return response.data;
  } catch (err) {
    console.log("error", err?.response?.data);
    if (err?.response?.data?.message.includes("jwt expired")) {
      // renew access token and call refresh token api
      let data = await refreshTokenApi();

      if (data?.accessToken) {
        storeAccessToken(data.accessToken);

        return apiProcessor({
          method,
          data,
          url,
          isPrivate,
          isRefresh,
        });
      }
    } else {
      return {
        status: false,
        message:
          err?.response?.data?.message ||
          "An error occurred while processing your request.",
      };
    }
  }
};
