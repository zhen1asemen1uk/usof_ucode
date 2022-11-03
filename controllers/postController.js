const Controller = require(`./controller`);

const CategoryModel = require('../models/CategoryModel');
const CommentModel = require('../models/CommentModel');
const LikeModel = require('../models/LikeModel');
const PostModel = require('../models/PostModel');

class PostController extends Controller {
	constructor() {
		super();
	}

	async getAllPosts(req, res) {
		try {
			const postsData = await PostModel.getAllPosts();

			for (const key in postsData[0]) {
				delete postsData[0][key].password;
				delete postsData[0][key].activationLink;
				delete postsData[0][key].verify;
				delete postsData[0][key].status;
				delete postsData[0][key].avatar;
				delete postsData[0][key].email;
			}

			return res.json(postsData[0]);
		} catch (error) {
			res.send(`Error get all post!`);
		}
	}

	async getPostByID(req, res) {
		try {
			if (req.params.post_id >= 1) {
				const post_id = req.params.post_id;
				let post = await PostModel.getPostByID(post_id);

				return res.json(post[0]);
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error get post by id!`);
		}
	}

	async getPostByUserID(req, res) {
		try {
			if (req.params.user_id >= 1) {
				const user_id = req.params.user_id;
				const post = await PostModel.getPostByUserID(user_id);

				for (const key in post[0]) {
					delete post[0][key].password;
					delete post[0][key].activationLink;
					delete post[0][key].verify;
					delete post[0][key].status;
					delete post[0][key].avatar;
					delete post[0][key].email;
				}

				return res.json(post[0]);
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error get post by id!`);
		}
	}

	async getCommentByPostID(req, res) {
		try {
			const post_id = req.params.post_id;
			let comments = await CommentModel.getCommentByPostID(post_id);

			return res.json(comments[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get comment by post id!`);
		}
	}

	async createComment(req, res) {
		try {
			if (req.body.content) {
				const post_id = req.params.post_id;
				const content = req.body.content;
				let autor = 0;

				if (req.user && req.user.id) {
					autor = req.user.id;
				}

				const createComment = await CommentModel.createComment(
					post_id,
					autor,
					content
				);
				return res.send('Comment add!');
			} else {
				return res.send('Comment must be filled!');
			}
		} catch (error) {
			console.log(error);
			res.send(`Error comment!`);
		}
	}

	async getCategoriesByPostID(req, res) {
		try {
			const post_id = req.params.post_id;
			let categories = await CategoryModel.getCategoriesByPostID(post_id);

			return res.json(categories[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get category by post id!`);
		}
	}
	async getAllLikeByPostID(req, res) {
		try {
			if (req.params.post_id >= 1) {
				const post_id = req.params.post_id;
				let likes = await LikeModel.getAllLikeByPostID(post_id);

				return res.json(likes[0]);
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error get all like by post id!`);
		}
	}

	async createPost(req, res) {
		try {
			if (req.body.title && req.body.content && req.body.categories) {
				const { title, content, categories } = req.body;

				let id_author_post = 0;
				if (req.user?.id) {
					id_author_post = req.user.id;
				}

				const createPost = await PostModel.createPost(
					title,
					content,
					id_author_post
				);
				const post_id = createPost[0].insertId;

				let category = categories.split(` `);

				for (let i = 0; i < category.length; i++) {
					const createCategory = await CategoryModel.createCategory(
						post_id,
						id_author_post,
						category[i]
					);
				}
				const post = await PostModel.getPostByID(post_id);

				return res.json(post[0][0]);
			} else {
				return res.send('Title, content and category must be filled!');
			}
		} catch (error) {
			console.log(error);
			res.send(`Error create Post`);
		}
	}

	async addLike(req, res) {
		try {
			const post_id = req.params.post_id;

			let like_login = `people`;

			if (req.user && req.user.login) {
				like_login = req.user.login;
			}

			if (like_login !== `people`) {
				const checkLikeForPost = await LikeModel.checkLikeForPost(
					post_id,
					like_login
				);

				if (checkLikeForPost[0].length > 0) {
					return res.send('I know you Liked!');
				}
			}
			const addLike = await LikeModel.addLike(post_id, like_login);
			return res.send('Liked!');
		} catch (error) {
			console.log(error);
			res.send(`Error 'bad like' :'(`);
		}
	}

	async updatePostByID(req, res) {
		try {
			if (req.params.post_id >= 1) {
				const postAutorId = await PostModel.getPostByID(
					req.params.post_id
				);
				const post_id = req.params.post_id;
				const { title, content, category } = req.body;

				if (req.user.id == postAutorId[0][0].id_author_post) {
					if (title) {
						const updateTitleByID = await PostModel.updateTitleByID(
							post_id,
							title
						);
					}
					if (content) {
						const updateContentByID =
							await PostModel.updateContentByID(post_id, content);
					}
					if (category) {
						const updateCategoryByID =
							await CategoryModel.updateCategoryByID(
								post_id,
								category
							);
					}

					return res.send(`Post update!`);
				} else {
					return res.send(`Access is closed !`);
				}
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error update post!`);
		}
	}

	async deletePostByID(req, res) {
		try {
			if (req.params.post_id >= 1) {
				const like_login = req.user.login;
				const post_id = req.params.post_id;
				const deletPost = await PostModel.deletePostByID(post_id);
				const deleteLikeFormPost =
					await LikeModel.deleteLikeFromPostByID(post_id, like_login);
				const deleteCommentByPostID =
					await CommentModel.deleteCommentByPostID(post_id);
				// const deleteLikeFromComment = await LikeModel.deleteLikeFromPostByID(post_id, like_login);//???
				const deleteCategory =
					await CategoryModel.deleteCategoryByPostID(post_id);

				res.send(`Success deleted!`);
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error deleted!`);
		}
	}

	async deleteLikeFromPostByID(req, res) {
		try {
			if (req.params.post_id >= 1) {
				const post_id = req.params.post_id;
				const like_login = req.user.login;
				const deleteLikeFromPostByID =
					await LikeModel.deleteLikeFromPostByID(post_id, like_login);

				return res.send(`Unliked`);
			} else {
				return res.send(`Error post id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error deleted like!`);
		}
	}
}
module.exports = new PostController();
