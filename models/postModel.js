const DbConnection = require('../db/DbConnection');
const Model = require(`./model`);

class PostModel extends Model {
	constructor() {
		super();
	}
	async getAllPosts() {
		return await DbConnection.getConnection(`
      SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post ORDER BY 6 DESC;`);
		// SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post ORDER BY 6 DESC LIMIT ${page},${size};`);
	}

	async getPostByID(id) {
		return await DbConnection.getConnection(`
      SELECT * FROM posts WHERE id=${id};`);
	}

	async getPostByUserID(id) {
		return await DbConnection.getConnection(`
      SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post WHERE id_author_post=${id};`);
	}

	async createPost(title_post, content_post, id_author_post) {
		return await DbConnection.getConnection(`
      INSERT INTO posts (title_post, content_post,id_author_post)
      VALUES ('${title_post}', '${content_post}','${id_author_post}');`);
	}

	async updateTitleByID(post_id, title_post) {
		return await DbConnection.getConnection(`
      UPDATE posts SET title_post='${title_post}' WHERE id='${post_id}';`);
	}
	async updateContentByID(post_id, content_post) {
		return await DbConnection.getConnection(`
      UPDATE posts SET content_post='${content_post}' WHERE id='${post_id}';`);
	}

	async deletePostByID(post_id) {
		return await DbConnection.getConnection(`
      DELETE FROM posts WHERE id=${post_id};`);
	}
}
module.exports = new PostModel();
