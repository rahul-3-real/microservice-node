import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import postRoutes from "./controller.js";

const port = 8000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/posts", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
