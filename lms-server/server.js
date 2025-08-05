import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the LMS Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
