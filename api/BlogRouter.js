const express = require('express')
const router = express.Router();
const blogController = require('./../controller/BlogController')

router.post('/new', blogController.createBlog)
router.delete('/:blogid', blogController.deleteBlog)
router.get('/all', blogController.getAllBlogs)
router.get('/:blogid', blogController.getBlogById)
router.put('/:blogid', blogController.updateBlog)

module.exports = router