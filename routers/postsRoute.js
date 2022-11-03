const express = require('express');
const router = express.Router();

const PostController = require('../controllers/PostController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/`, PostController.getAllPosts);

router.get(`/:post_id`, PostController.getPostByID);

router.get(`/:user_id/user`, PostController.getPostByUserID);

router.get(`/:post_id/comments`, PostController.getCommentByPostID);

router.post(`/:post_id/comments`, authMiddleware, PostController.createComment);

router.get(`/:post_id/categories`, PostController.getCategoriesByPostID);

router.get(`/:post_id/like`, PostController.getAllLikeByPostID);

router.post(`/`, authMiddleware, PostController.createPost);

router.post(`/:post_id/like`, authMiddleware, PostController.addLike);

router.patch(`/:post_id`, authMiddleware, PostController.updatePostByID);

router.delete(`/:post_id`, authMiddleware, PostController.deletePostByID);

router.delete(
	`/:post_id/like`,
	authMiddleware,
	PostController.deleteLikeFromPostByID
);

module.exports = router;
