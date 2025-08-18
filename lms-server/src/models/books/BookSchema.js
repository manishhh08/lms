import { date, number, required } from "joi";
import mongoose from "mongoose";
import UserSchema from "../users/UserSchema";

const BookSchema = new mongoose.Schema({
  booTitle: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  imdb: {
    type: Number,
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
});

export default mongoose.model("Books", BookSchema);
