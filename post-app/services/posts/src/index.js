import express from "express";
import cors from "cors";

const port = 3000;
const app = express();

app.use(cors());

// Data
const posts = {};

// Routes
app.get("/posts", (req, res) => {});

app.post("/posts", (req, res) => {});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
