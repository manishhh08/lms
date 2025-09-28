import express from "express";
import { authMiddleware, isAdmin } from "../middleware/authMiddleware.js";
import {
  createNewReviews,
  retrieveAllPubReviews,
  retrieveAllReviews,
  updateReviewStatus,
} from "../controller/reviewController.js";

const router = express.Router();

//get public reviews
router.get("/pub-reviews", retrieveAllPubReviews);

//get all reviews
router.get("/", authMiddleware, isAdmin, retrieveAllReviews);

//create new reviews
router.post("/", authMiddleware, createNewReviews);

// update review status
router.put("/:id/status", authMiddleware, isAdmin, updateReviewStatus);

export default router;
