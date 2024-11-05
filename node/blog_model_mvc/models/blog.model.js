const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: {
    required: true,
    type: String,
    unique: true,
  },
  author: String,
  content: String,
});

const Blog = model("Blog", blogSchema);
module.exports = Blog;
