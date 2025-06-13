import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.get("/api/users/current-user", (req, res) => {
  res.send("Hi there!");
});

app.listen(8000, () => {
  console.log("Auth service is running on port 8000");
});
