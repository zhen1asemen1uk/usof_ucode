const Controller = require(`./controller`);

const PostModel = require(`../models/PostModel`);
const CategoryModel = require('../models/CategoryModel');

class CategoryController extends Controller {
	constructor() {
		super();
	}

	async getAllCategories(req, res) {
		try {
			const categories = await CategoryModel.getAllCategories();
			return res.json(categories[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get all categories!`);
		}
	}

	async getDataByCategory_ID(req, res) {
		try {
			const category_id = req.params.category_id;
			const data = await CategoryModel.getDataByCategory_ID(category_id);

			return res.json(data[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get data by category!`);
		}
	}

	async getPostsByCategoriesID(req, res) {
		try {
			//plan "B"
			// const posts = await CategoryModel.getPostsByCategoriesID(category_id);
			const category_id = req.params.category_id;
			//"category_id" = name category!
			const posts = await CategoryModel.getDataByCategory_Title(
				category_id
			);

			let allPosts = [];
			let post;

			for (let i = 0; i < posts[0].length; i++) {
				if (!posts[0][i].id_post == 0) {
					post = await PostModel.getPostByID(posts[0][i].id_post);
					allPosts.push(post[0][0]);
				}
			}

			return res.json(allPosts);
		} catch (error) {
			console.log(error);
			res.send(`Error get post by category!`);
		}
	}

	async createCategory(req, res) {
		try {
			if (req.body.title) {
				const { title } = req.body;
				let post_id = 0;
				let id_author = 0;

				if (req.user && req.user.id) {
					id_author = req.user.id;
					if (req.body.post_id) {
						post_id = req.body.post_id;
					}
				}

				const category = await CategoryModel.createCategory(
					post_id,
					id_author,
					title
				);

				return res.send(`Category ${title} created!`);
			} else {
				res.send(`Error title category!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error create category!`);
		}
	}
	async updateCategoryByID(req, res) {
		try {
			if (req.params.category_id >= 1) {
				const category_id = req.params.category_id;
				const categoryAutorId =
					await CategoryModel.getDataByCategory_ID(category_id);

				if (req.user.id == categoryAutorId[0][0].id_author_category) {
					if (req.body.title) {
						const { title } = req.body;
						const updateCategoryByID =
							await CategoryModel.updateCategoryByID(
								category_id,
								title
							);

						return res.send(`Category update!`);
					} else {
						return res.send(`Error title!`);
					}
				} else {
					return res.send(`Access is closed !`);
				}
			} else {
				return res.send(`Error category id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error update post!`);
		}
	}

	async deleteCategoryByID(req, res) {
		try {
			if (req.params.category_id >= 1) {
				const category_id = req.params.category_id;
				const categoryAutorId =
					await CategoryModel.getDataByCategory_ID(category_id);

				if (req.user.id == categoryAutorId[0][0].id_author_category) {
					const deleted = await CategoryModel.deleteCategoryByID(
						category_id
					);

					return res.send(`Category deleted!`);
				} else {
					return res.send(`Access is closed !`);
				}
			} else {
				return res.send(`Error category id!`);
			}
		} catch (error) {
			console.log(error);
			res.send(`Error delete!`);
		}
	}
}

module.exports = new CategoryController();
