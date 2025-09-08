import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { getAllReviews, insertReview } from "../models/reviews/reviewModel.js";
import { getUserById } from "../models/users/UserModel.js";
import { updateBorrowById } from "../models/borrows/BorrowModel.js";

const router = express.Router();

//get public reviews

router.get("/pub-reviews", async (req, res, next) => {
  let reviews = await getAllReviews({ status: "active" });
  return res.json({
    status: "success",
    message: "Reviews fetched successfully",
    reviews,
  });
});

//create new reviews
router.post("/", authMiddleware, async (req, res, next) => {
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
});

export default router;
