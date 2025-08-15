import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const config = {
  port: process.env.PORT || 4001,
  mongoOption: {
    url: process.env.MONGO_URL || "mongodb://localhost:27017/lms-db",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "SECRET_KEY",
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    refresh_secret: process.env.JWT_REFRESH_SECRET || "REFRESH-SECRET_KEY",
    refresh_expiresIn: process.env.JWT_REFRESH_EXPIRES_IN || "30d",
  },
  salt: process.env.SALT || 10,
};
