import { apiProcessor } from "../../utils/axiosHelper";
const apiUrl = import.meta.env.VITE_APP_API_URL + "/api/v1";

export const fetchReviewApi = async (pubReview = false) => {
  return apiProcessor({
    method: "GET",
    url: pubReview ? `${apiUrl}/reviews/pub-reviews` : `${apiUrl}/reviews`,
    isPrivate: !pubReview,
  });
};

export const postNewReview = async (reviewObject) => {
  return apiProcessor({
    method: "POST",
    url: `${apiUrl}/reviews`,
    data: reviewObject,
    isPrivate: true,
  });
};

export const updateReviewStatus = async ({ _id, ...reviewObject }) => {
  return apiProcessor({
    method: "put",
    url: `${apiUrl}/reviews/${_id}/status`,
    isPrivate: true,
    data: reviewObject,
  });
};
