import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  ratings: {
    type: Number,
    required: true,
  },
  bookTitle: {
    type: String,
    // required: true,
  },
  message: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
    required: true,
  },
  borrowId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "borrow",
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Review", reviewSchema);
