const Controller = require(`./controller`);

const CommentModel = require('../models/CommentModel');
const LikeModel = require('../models/LikeModel');

class CommentController extends Controller {
	constructor() {
		super();
	}

	async getCommentByID(req, res) {
		try {
			const comment_id = req.params.comment_id;
			const comment = await CommentModel.getCommentByID(comment_id);

			return res.json(comment[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get comment by id!`);
		}
	}
	async getAllCommentLikeByID(req, res) {
		try {
			const comment_id = req.params.comment_id;
			const like = await LikeModel.getAllCommentLikeByID(comment_id);

			return res.json(like[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get all comment like by id!`);
		}
	}

	async addLikeForComment(req, res) {
		try {
			const comment_id = req.params.comment_id;
			let like_login = `people`;

			if (req.user && req.user.login) {
				like_login = req.user.login;
			}
			const checkLikeForComment = await LikeModel.checkLikeForComment(
				comment_id,
				like_login
			);

			if (checkLikeForComment[0].length > 0) {
				return res.send('I know you Liked!');
			}
			const like = await LikeModel.addLikeForComment(
				comment_id,
				like_login
			);

			return res.json(`Liked!`);
		} catch (error) {
			console.log(error);
			res.send(`Error like for comment!`);
		}
	}

	async updateComment(req, res) {
		try {
			const comment_id = req.params.comment_id;

			if (req.body.content_comment) {
				const content_comment = req.body.content_comment;
				const commentAutorId = await CommentModel.getCommentByID(
					comment_id
				);

				if (req.user.id == commentAutorId[0][0].id_author_comment) {
					const updateComment = await CommentModel.updateComment(
						comment_id,
						content_comment
					);

					return res.json(`Comment updated!`);
				} else {
					return res.send(`Access is closed !`);
				}
			} else {
				res.send(`Error comment!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error update comment!`);
		}
	}

	async deleteCommentByID(req, res) {
		try {
			const comment_id = req.params.comment_id;
			const commentAutorId = await CommentModel.getCommentByID(
				comment_id
			);

			if (req.user.id == commentAutorId[0][0].id_author_comment) {
				const deleteComment = await CommentModel.deleteCommentByID(
					comment_id
				);

				return res.json(`Comment deleted!`);
			} else {
				return res.send(`Access is closed !`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error delete comment!`);
		}
	}

	async deleteLikeFromCommentByID(req, res) {
		try {
			if (req.params.comment_id >= 1) {
				const comment_id = req.params.comment_id;
				const like_login = req.user.login;
				const deleteLikeFromComment =
					await LikeModel.deleteLikeFromCommentByID(
						comment_id,
						like_login
					);

				return res.send(`Unliked`);
			} else {
				return res.send(`Error comment id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error deleted like!`);
		}
	}
}
module.exports = new CommentController();
