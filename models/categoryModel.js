const Model = require(`./model`);
const dbConnection = require(`../db/dbConnection`);

class categoryModel extends Model {
      constructor() {
            super();
      }
      async getAllCategories() {
            return await dbConnection.getConnection(`
            SELECT title_category FROM categories;`);
      }

      async getDataByCategory_ID(id) {
            return await dbConnection.getConnection(`
            SELECT * FROM categories WHERE id='${id}';`);
      }
      async getDataByCategory_Title(title_category) {
            return await dbConnection.getConnection(`
            SELECT * FROM categories WHERE title_category='${title_category}';`);
      }

      async getCategoriesByPostID(id_post) {
            return await dbConnection.getConnection(`
            SELECT title_category FROM categories WHERE id_post=${id_post};`);
      }

      async getPostsByCategoriesID(id) {
            return await dbConnection.getConnection(`
            SELECT id_post FROM categories WHERE id='${id}';`);
      }
      async updateCategoryByID(post_id, title_category) {
            return await dbConnection.getConnection(`
            UPDATE categories SET title_category='${title_category}' WHERE id_post='${post_id}';`);
      }

      async createCategory(post_id, id_author, title) {
            return await dbConnection.getConnection(`
            INSERT INTO categories (id_post, id_author_category, title_category)
            VALUES ('${post_id}', '${id_author}', '${title}');`);
      }

      async updateCategoryByID(category_id, title_category) {
            return await dbConnection.getConnection(`
            UPDATE categories SET title_category = '${title_category}' WHERE id = '${category_id}';`);
      }

      async deleteCategoryByID(category_id) {
            return await dbConnection.getConnection(`
            DELETE FROM categories WHERE id=${category_id};`);
      }


}
module.exports = new categoryModel();