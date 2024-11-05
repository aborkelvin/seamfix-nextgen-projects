const Blog = require("../models/blog.model");
const {
  getAll,
  createOne,
  getOne,
  updateOne,
  deleteOne,
} = require("./generic.controller");

// Code Refactored to use generic Controllers

/* const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await Blog.find();
    res.json(blogPosts);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
}; */

const getBlogPosts = getAll(Blog);

/* const createBlogPost = async (req, res) => {
  try {
    const newBlogPost = await Blog.create(req.body);
    res.status(201).json(newBlogPost);
  } catch (err) {
    res.status(400).json({
      message: err.message ? err.message : "Internal Serve error",
    });
  }
}; */

const createBlogPost = createOne(Blog, "Blog");

/* const getBlogPostById = async (req, res) => {
  try {
    const blogPost = await Blog.findById(req.params.id);
    res.json(blogPost);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
}; */
const getBlogPostById = getOne(Blog, "Blog");

/* const updateBlogPost = async (req, res) => {
  try {
    const updatedBlogPost = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedBlogPost);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
}; */

const updateBlogPost = updateOne(Blog, "Blog");

/* const deleteBlogPost = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({
      message: "Blog Post deleted successfully",
    });
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
}; */

const deleteBlogPost = deleteOne(Blog, "Blog Post");

module.exports = {
  getBlogPosts,
  createBlogPost,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};
