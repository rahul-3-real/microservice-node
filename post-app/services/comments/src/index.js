import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

// Data
const comments = [];

// Routes
app.get("/comments", (req, res) => {});

app.post("/comments", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
