import mongoose from "mongoose";
const mongodbConnection = async () => {
  await mongoose.connect(
    process.env.MONGO_URL || "mongodb://localhost:27017/lms-db"
  );
};

export default mongodbConnection;
