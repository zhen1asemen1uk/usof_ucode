const express = require('express');
const router = express.Router();

const CommentController = require('../controllers/CommentController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/:comment_id`, CommentController.getCommentByID);

router.get(`/:comment_id/like`, CommentController.getAllCommentLikeByID);

router.post(
	`/:comment_id/like`,
	authMiddleware,
	CommentController.addLikeForComment
);

router.patch(`/:comment_id`, authMiddleware, CommentController.updateComment);

router.delete(
	`/:comment_id`,
	authMiddleware,
	CommentController.deleteCommentByID
);

router.delete(
	`/:comment_id/like`,
	authMiddleware,
	CommentController.deleteLikeFromCommentByID
);

module.exports = router;
