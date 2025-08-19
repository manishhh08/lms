// import { date, number, required } from "joi";
import mongoose from "mongoose";
// import BookSchema from "../users/BookSchema.js";

const BookSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["available", "unavailable"],
      required: true,
      default: "unavailable",
    },

    bookTitle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishedYear: {
      type: Date,
      required: true,
    },
    isbn: {
      type: String,
      index: 1,
      // unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    expectedAvailable: {
      type: Date,
      default: null,
    },
    averageRating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Books", BookSchema);
