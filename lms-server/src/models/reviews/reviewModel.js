import Review from "./reviewSchema.js";

//get all reviews
export const getAllReviews = (filter) => {
  return Review.find(filter);
};

//create new review
export const insertReview = (reviewObject) => {
  return Review.insertOne(reviewObject);
};

//update review if required
export const updateReviewById = (id, reviewObj) => {
  return Review.findByIdAndUpdate(id, reviewObj);
};
