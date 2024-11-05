const express = require("express");
const {
  getBlogPosts,
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} = require("../controllers/blog.controller");

const BlogRouter = express.Router();

BlogRouter.route("/").get(getBlogPosts).post(createBlogPost);

BlogRouter.route("/:id")
  .get(getBlogPostById)
  .patch(updateBlogPost)
  .delete(deleteBlogPost);

module.exports = BlogRouter;
