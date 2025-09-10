// import { date, number, required } from "joi";

import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
  {
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
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
      type: Number,
      required: true,
    },
    isbn: {
      type: String,
      unique: true,
      index: 1,
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
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      small: {
        cloud: { type: String },
      },
      medium: {
        cloud: { type: String },
      },
      large: {
        cloud: { type: String },
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Books", BookSchema);
