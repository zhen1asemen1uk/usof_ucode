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

   async getAllCommentLikeByID(id_comment) {
      return await dbConnection.getConnection(`
         SELECT * FROM likes WHERE id_comment='${id_comment}';`);
   }

   async addLikeForComment(id_comment, like_login) {
      return await dbConnection.getConnection(`
      INSERT INTO likes ( id_comment ,like_login)
      VALUES ('${id_comment}', '${like_login}');`);
   }

   async updateComment(comment_id, content_comment) {
      return await dbConnection.getConnection(`
            UPDATE comments SET content_comment = '${content_comment}' WHERE id = '${comment_id}';`);
   }

   async deleteCommentByID(comment_id) {
      return await dbConnection.getConnection(`
         DELETE FROM comments WHERE id=${comment_id};`);
   }

   async deleteLikeFromCommentByID(id_comment, like_login) {
      return await dbConnection.getConnection(`
         DELETE FROM likes WHERE id_comment=${id_comment} AND like_login='${like_login}';`);
   }

}
module.exports = new commentModel();