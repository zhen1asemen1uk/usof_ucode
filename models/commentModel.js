const Model = require(`./model`);

const dbConnection = require(`../db/dbConnection`);

class commentModel extends Model {
   constructor() {
      super();
   }

   async getCommentByID(id) {
      return await dbConnection.getConnection(`
      SELECT * FROM comments WHERE id='${id}';`);
   }

   async getCommentByPostID(id_post) {
      return await dbConnection.getConnection(`
      SELECT * FROM comments WHERE id_post=${id_post};`);
   }

   async createComment(id_post, id_author_comment, content_comment) {
      return await dbConnection.getConnection(`
      INSERT INTO comments (id_post, id_author_comment, content_comment)
      VALUES ('${id_post}', '${id_author_comment}', '${content_comment}');`);
   }

   async updateComment(comment_id, content_comment) {
      return await dbConnection.getConnection(`
      UPDATE comments SET content_comment = '${content_comment}' WHERE id = '${comment_id}';`);
   }

   async deleteCommentByID(comment_id) {
      return await dbConnection.getConnection(`
      DELETE FROM comments WHERE id=${comment_id};`);
   }
   async deleteCommentByPostID(id_post) {
      return await dbConnection.getConnection(`
      DELETE FROM comments WHERE id_post=${id_post};`);
   }

}
module.exports = new commentModel();