import mongoose from "mongoose";
import { config } from "./config.js";

export const mongodbConnection = async () => {
  await mongoose.connect(config.mongoOption.url);
};

export default mongodbConnection;
