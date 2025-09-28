import { updateBorrowById } from "../models/borrows/BorrowModel.js";
import {
  getAllReviews,
  insertReview,
  updateReviewById,
} from "../models/reviews/reviewModel.js";
import { getUserById } from "../models/users/UserModel.js";

export const retrieveAllPubReviews = async (req, res, next) => {
  try {
    let reviews = await getAllReviews({ status: "active" });
    return res.json({
      status: "success",
      message: "Public reviews fetched successfully",
      reviews,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Failed to retrieve public reviews.",
    });
  }
};

export const retrieveAllReviews = async (req, res, next) => {
  try {
    let reviews = await getAllReviews({});
    return res.json({
      status: "success",
      message: "All reviews fetched successfully",
      reviews,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Failed to retrieve reviews",
    });
  }
};

export const createNewReviews = async (req, res, next) => {
  try {
    //retrieve user data
    const userData = await getUserById(req.body.userId);
    req.body.username = userData.fullName;
    const review = await insertReview(req.body);

    if (review?._id) {
      // set borrow status
      let borrowData = await updateBorrowById(req.body.borrowId, {
        status: "reviewed",
      });

      // TODO: update rating data when adding review

      res.json({
        status: "success",
        message: "Your new review has been added successfully",
        review,
      });
    } else {
      res.json({
        status: "error",
        message: "Unable to add the review, try agian later",
      });
    }
  } catch (err) {
    next(err);
  }
};

export const updateReviewStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedStatus = await updateReviewById(id, { status }, { new: true });
    return res.json({
      status: "success",
      message: "Review status successfully updated",
      data: updatedStatus,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: "Failed to update review status",
    });
  }
};
