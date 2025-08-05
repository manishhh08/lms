import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongodbConnection from "./src/config/mongodbConfig.js";
import { config } from "./src/config/config.js";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB

const PORT = config.port || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to LMS Server",
  });
});

// Start the server
mongodbConnection().then(() => {
  console.log("Connected to MongoDB");
});
app.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
    return;
  } else {
    console.log("Server started successfully on port", PORT);
  }
});

export default app;
