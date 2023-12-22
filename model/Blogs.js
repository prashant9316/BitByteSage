// models/Blog.js
const mongoose = require('mongoose');
const shortid = require('shortid')

const blogSchema = new mongoose.Schema({
  blogNo: {
    type: String,
    default: shortid.generate,
    unique: true,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    required: true,
    default: true
  },
  slug: {
    type: String,
    required: true
  },
  mainImage: {
    type: String // Assuming storing image URL
  },
  otherImages: [
    {
      type: String // Array of image URLs inside content
    }
  ]
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
