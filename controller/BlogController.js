// controllers/blogController.js
const Blog = require('./../model/Blogs');
const slugify = require('slugify')

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new blog
const createBlog = async (req, res) => {
  const { author, state, title, description, content, mainImage, otherImages } = req.body;

  try {
    const newBlog = new Blog({
      author,
      title,
      description,
      content,
      state,
      slug: slugify(title),
      mainImage,
      otherImages
    });

    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get a specific blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findOne({blogNo: req.params.id});
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBlogByNo = async(blogNo) => {
  try {
    const blog = await Blog.findOne({blogNo: req.params.id});
    if (!blog) {
      return false
    }
    return blog;
  } catch (err) {
    return false
  }
}


// Update a blog by ID
const updateBlog = async (req, res) => {
    const { author, title, description, content, mainImage, otherImages } = req.body;
  
    try {
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
        author,
        title,
        description,
        content,
        mainImage,
        otherImages
      }, { new: true });
  
      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.json(updatedBlog);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Delete a blog by ID
  const deleteBlog = async (req, res) => {
    try {
      const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  
      if (!deletedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.json({ message: 'Blog deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
module.exports = {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlogById,
    deleteBlog,
    getBlogByNo
}