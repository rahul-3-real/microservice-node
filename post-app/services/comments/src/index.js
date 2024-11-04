import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import commentRoutes from "./controller.js";

const app = express();
const port = 8001;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/comments", commentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
