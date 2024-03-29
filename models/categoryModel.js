const Model = require(`./model`);
const DbConnection = require(`../db/DbConnection`);

class CategoryModel extends Model {
	constructor() {
		super();
	}
	async getAllCategories() {
		return await DbConnection.getConnection(`
            SELECT id, id_post, id_author_category, title_category FROM categories;`);
	}

	async getDataByCategory_ID(id) {
		return await DbConnection.getConnection(`
            SELECT * FROM categories WHERE id='${id}';`);
	}
	async getDataByCategory_Title(title_category) {
		return await DbConnection.getConnection(`
            SELECT * FROM categories WHERE title_category='${title_category}';`);
	}

	async getCategoriesByPostID(id_post) {
		return await DbConnection.getConnection(`
            SELECT title_category FROM categories WHERE id_post=${id_post};`);
	}

	async getPostsByCategoriesID(id) {
		return await DbConnection.getConnection(`
            SELECT id_post FROM categories WHERE id='${id}';`);
	}
	async updateCategoryByID(post_id, title_category) {
		return await DbConnection.getConnection(`
            UPDATE categories SET title_category='${title_category}' WHERE id_post='${post_id}';`);
	}

	// async checkCategoryTitle(title) {
	//       return await DbConnection.getConnection(`
	//       SELECT * FROM categories WHERE title_category='${title}';`);
	// }

	async createCategory(post_id, id_author, title) {
		return await DbConnection.getConnection(`
            INSERT INTO categories (id_post, id_author_category, title_category)
            VALUES ('${post_id}', '${id_author}', '${title}');`);
	}

	async updateCategoryByID(category_id, title_category) {
		return await DbConnection.getConnection(`
            UPDATE categories SET title_category = '${title_category}' WHERE id = '${category_id}';`);
	}

	async deleteCategoryByID(category_id) {
		return await DbConnection.getConnection(`
            DELETE FROM categories WHERE id=${category_id};`);
	}
	async deleteCategoryByPostID(id_post) {
		return await DbConnection.getConnection(`
            DELETE FROM categories WHERE id_post=${id_post};`);
	}
}
module.exports = new CategoryModel();
