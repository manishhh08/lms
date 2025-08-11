import axios from "axios";
// const apiUrl = process.env.VITE_APP_API_URL + "/api/v1";

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
