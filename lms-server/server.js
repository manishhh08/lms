import express from "express";
import cors from "cors";
import mongodbConnection from "./src/config/mongodbConfig.js";
import { config } from "./src/config/config.js";
import { registerUser, verifyEmail } from "./src/controller/authController.js";
import authRouter from "./src/routes/authRouter.js";
import userRouter from "./src/routes/userRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
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

// Auth routes
app.use("/api/v1/auth", authRouter);

// User routes
app.use("/api/v1/user", userRouter);

//book routes
app.use("/api/v1/book", bookRouter);
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
