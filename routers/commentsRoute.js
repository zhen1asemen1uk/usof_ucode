const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/:comment_id`, commentController.getCommentByID);

router.get(`/:comment_id/like`, commentController.getAllCommentLikeByID);

router.post(`/:comment_id/like`, authMiddleware, commentController.addLikeForComment);

router.patch(`/:comment_id`, authMiddleware, commentController.updateComment);

router.delete(`/:comment_id`, authMiddleware, commentController.deleteCommentByID);

router.delete(`/:comment_id/like`, authMiddleware, commentController.deleteLikeFromCommentByID);


module.exports = router;