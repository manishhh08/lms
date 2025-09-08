import { toast } from "react-toastify";
import { fetchReviewApi, postNewReview } from "./reviewApi";
import { setPubReviews } from "./reviewSlice";

// fetch current user borrow
export const fetchPublicReviewAction = () => async (dispatch) => {
  let data = await fetchReviewApi(true);
  console.log(data);
  dispatch(setPubReviews(data.reviews));
};

// add review action
export const addNewReviewAction = (obj) => async (dispatch) => {
  console.log(100, obj);
  const pending = postNewReview(obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;

  toast[status](message);

  if (status === "success") {
    return true;
  }
};
