const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

router.post("/create-blog", async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json({
    status: "Success!",
  });
});

router.put("/edit-blog/:id", async (req, res) => {
  await Blog.findByIdAndUpdate(req.params.id, req.body);
  res.json({
    status: "Task updated, Success!",
  });
});

router.delete("/delete/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({
    status: "Task deleted, Success!",
  });
});

router.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
});

module.exports = router;
