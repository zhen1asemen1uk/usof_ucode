const DbConnection = require('../db/DbConnection');
const Model = require(`./model`);

class LikeModel extends Model {
	constructor() {
		super();
	}
	async getAllLikeByPostID(id_post) {
		return await DbConnection.getConnection(`
      SELECT like_login FROM likes WHERE id_post=${id_post};`);
	}

	async checkLikeForPost(id_post, like_login) {
		return await DbConnection.getConnection(`
      SELECT * FROM likes WHERE id_post=${id_post} AND like_login='${like_login}';`);
	}

	async checkLikeForComment(comment_id, like_login) {
		return await DbConnection.getConnection(`
      SELECT * FROM likes WHERE id_comment=${comment_id} AND like_login='${like_login}';`);
	}

	async getAllCommentLikeByID(id_comment) {
		return await DbConnection.getConnection(`
      SELECT * FROM likes WHERE id_comment='${id_comment}';`);
	}

	async addLikeForComment(id_comment, like_login) {
		return await DbConnection.getConnection(`
      INSERT INTO likes (id_comment ,like_login)
      VALUES ('${id_comment}', '${like_login}');`);
	}

	async addLike(id_post, like_login) {
		return await DbConnection.getConnection(`
      INSERT INTO likes ( id_post ,like_login)
      VALUES ('${id_post}', '${like_login}');`);
	}

	async deleteLikeFromCommentByID(id_comment, like_login) {
		return await DbConnection.getConnection(`
      DELETE FROM likes WHERE id_comment=${id_comment} AND like_login='${like_login}';`);
	}

	async deleteLikeFromPostByID(post_id, like_login) {
		return await DbConnection.getConnection(`
      DELETE FROM likes WHERE id_post=${post_id} AND like_login='${like_login}';`);
	}
}
module.exports = new LikeModel();
