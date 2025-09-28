import { toast } from "react-toastify";
import { fetchReviewApi, postNewReview, updateReviewStatus } from "./reviewApi";
import { setPubReviews, setReviews } from "./reviewSlice";
import { fetchBorrowAction } from "../borrows/borrowActions";

// fetch all reviews
export const fetchAllReviewAction = () => async (dispatch) => {
  let data = await fetchReviewApi(false);
  console.log(data);
  dispatch(setReviews(data.reviews));
};
// fetch publicly available reviews
export const fetchPublicReviewAction = () => async (dispatch) => {
  let data = await fetchReviewApi(true);
  console.log(data);
  dispatch(setPubReviews(data.reviews || []));
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
    await dispatch(fetchBorrowAction());
    await dispatch(fetchAllReviewAction());
    return true;
  }
};

// update status of review
export const updateReviewStatusAction =
  (form) => async (dispatch, getState) => {
    let data = await updateReviewStatus(form);
    toast[data.status](data.message);

    if (data.status == "success") {
      const reviews = getState().reviewStore.reviews;

      const allUpdatedReviews = reviews.map((review) => {
        return review._id === data.data._id ? data.data : review;
      });
      dispatch(setReviews(allUpdatedReviews || []));
    }
  };
