import { Router } from "express";
import { randomBytes } from "crypto";

const router = Router();

// Data
const comments = {};

router.route("/:id/comments").get((req, res) => {
  const { id } = req.params;
  res.status(200).send(comments[id] || []);
});

router.route("/:id/comments").post((req, res) => {
  const commentId = randomBytes(16).toString("hex");
  const { content } = req.body;
  const { id } = req.params;

  const postComments = comments[id] || [];
  postComments.push({ id: commentId, content });
  comments[id] = postComments;

  res.status(201).send(comments);
});

export default router;
