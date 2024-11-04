import { Router } from "express";
import { randomBytes } from "crypto";

const router = Router();

// Data
const posts = {};

router.get("/", (req, res) => {
  res.send(posts);
});

router.post("/", (req, res) => {
  const id = randomBytes(16).toString("hex");
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).send({ message: "Title and content are required." });
  }

  posts[id] = { id, title, content };
  res.status(201).send(posts[id]);
});

export default router;
