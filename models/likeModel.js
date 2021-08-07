const dbConnection = require("../db/dbConnection");
const Model = require(`./model`)

class likeModel extends Model {
   constructor() {
      super();
   }
   async getAllLikeByPostID(id_post) {
      return await dbConnection.getConnection(`
      SELECT like_login FROM likes WHERE id_post=${id_post};`);
   }

   async checkLike(id_post, like_login) {
      return await dbConnection.getConnection(`
      SELECT * FROM likes WHERE id_post=${id_post} AND like_login='${like_login}';`);
   }

   async getAllCommentLikeByID(id_comment) {
      return await dbConnection.getConnection(`
      SELECT * FROM likes WHERE id_comment='${id_comment}';`);
   }

   async addLikeForComment(id_comment, like_login) {
      return await dbConnection.getConnection(`
      INSERT INTO likes (id_comment ,like_login)
      VALUES ('${id_comment}', '${like_login}');`);
   }

   async addLike(id_post, like_login) {
      return await dbConnection.getConnection(`
      INSERT INTO likes ( id_post ,like_login)
      VALUES ('${id_post}', '${like_login}');`);
   }

   async deleteLikeFromCommentByID(id_comment, like_login) {
      return await dbConnection.getConnection(`
      DELETE FROM likes WHERE id_comment=${id_comment} AND like_login='${like_login}';`);
   }

   async deleteLikeFromPostByID(post_id, like_login) {
      return await dbConnection.getConnection(`
      DELETE FROM likes WHERE id_post=${post_id} AND like_login='${like_login}';`);
   }


}
module.exports = new likeModel();