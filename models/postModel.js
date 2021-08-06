const dbConnection = require("../db/dbConnection");
const Model = require(`./model`)

class postModel extends Model {
   constructor() {
      super();
   }
   async getAllPosts() {
      return await dbConnection.getConnection(`
         SELECT * FROM posts;`);
   }
   async getPostByID(id) {
      return await dbConnection.getConnection(`
         SELECT * FROM posts WHERE id=${id};`);
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

   async getCategoriesByPostID(id_post) {
      return await dbConnection.getConnection(`
      SELECT title_category FROM categories WHERE id_post=${id_post};`);
   }

   async getAllLikeByPostID(id_post) {
      return await dbConnection.getConnection(`
      SELECT  like_login FROM likes WHERE id_post=${id_post};`);
   }
   
   async createPost(title_post, content_post, id_author_post) {
      return await dbConnection.getConnection(`
      INSERT INTO posts (title_post, content_post,id_author_post)
      VALUES ('${title_post}', '${content_post}','${id_author_post}');`);
   }
   
   async checkLike(id_post, like_login) {
      return await dbConnection.getConnection(`
      SELECT * FROM likes WHERE id_post=${id_post} AND like_login='${like_login}';`);
   }

   async addLike(id_post, like_login) {
      return await dbConnection.getConnection(`
      INSERT INTO likes ( id_post ,like_login)
      VALUES ('${id_post}', '${like_login}');`);
   }

   async updateTitleByID(post_id, title_post) {
      return await dbConnection.getConnection(`
         UPDATE posts SET title_post='${title_post}' WHERE id='${post_id}';`);
   }
   async updateContentByID(post_id, content_post) {
      return await dbConnection.getConnection(`
         UPDATE posts SET content_post='${content_post}' WHERE id='${post_id}';`);
   }
   async updateCategoryByID(post_id, title_category) {
      return await dbConnection.getConnection(`
         UPDATE categories SET title_category='${title_category}' WHERE id_post='${post_id}';`);
   }

   async deletePostByID(post_id) {
      return await dbConnection.getConnection(`
         DELETE FROM posts WHERE id=${post_id};`);
   }
   
   async deleteLikeFromPostByID(post_id, like_login) {
      return await dbConnection.getConnection(`
         DELETE FROM likes WHERE id_post=${post_id} AND like_login='${like_login}';`);
   }

}
module.exports = new postModel();