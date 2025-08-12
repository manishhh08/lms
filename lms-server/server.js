import express from "express";
import cors from "cors";
import mongodbConnection from "./src/config/mongodbConfig.js";
import { config } from "./src/config/config.js";
import { registerUser } from "./src/controller/authController.js";
import authRouter from "./src/routes/authRouter.js";

// Connect to MongoDB

const PORT = config.port;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "Welcome to LMS Server",
  });
});

// User routes

app.use("/api/v1/auth", authRouter);
// Start the server
mongodbConnection()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, (err) => {
      if (err) {
        console.error("Error starting server:", err);
      } else {
        console.log("Server started successfully on port", PORT);
      }
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
