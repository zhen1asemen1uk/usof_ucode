const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/`, postController.getAllPosts);

router.get(`/:post_id`, postController.getPostByID);

router.get(`/:post_id/comments`, postController.getCommentByPostID);

router.post(`/:post_id/comments`, authMiddleware, postController.createComment);

router.get(`/:post_id/categories`, postController.getCategoriesByPostID);

router.get(`/:post_id/like`, postController.getAllLikeByPostID);

router.post(`/`, authMiddleware, postController.createPost);

router.post(`/:post_id/like`, authMiddleware, postController.addLike);

router.patch(`/:post_id`, authMiddleware, postController.updatePostByID);

router.delete(`/:post_id`, authMiddleware, postController.deletePostByID);

router.delete(`/:post_id/like`, authMiddleware, postController.deleteLikeFromPostByID);


module.exports = router;