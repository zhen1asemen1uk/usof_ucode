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
   async getPostByID(post_id) {
      return await dbConnection.getConnection(`
         SELECT * FROM posts WHERE id=${post_id};`);
   }
   async getCommentByPostID(post_id) {
      return await dbConnection.getConnection(`
         SELECT * FROM comments WHERE id_post=${post_id};`);
   }

   async createComment(post_id, author_comment, content_comment) {
      return await dbConnection.getConnection(`
      INSERT INTO comments (id_post, id_author_comment, content_comment)
      VALUES ('${post_id}', '${author_comment}', '${content_comment}');`);
   }

   async getCategoriesByPostID(id) {
      return await dbConnection.getConnection(`
      SELECT name_category FROM posts WHERE id=${id};`);
   }

   async getAllLikeByPostID(post_id) {
      return await dbConnection.getConnection(`
      SELECT  like_login FROM likes WHERE id_post=${post_id};`);
   }
   
   async createPost(title, content, name_category, id_author_post) {
      return await dbConnection.getConnection(`
      INSERT INTO posts (title_post, content_post, name_category,id_author_post)
      VALUES ('${title}', '${content}', '${name_category}','${id_author_post}');`);
   }
   
   async checkLike(post_id, like_login) {
      return await dbConnection.getConnection(`
      SELECT * FROM likes WHERE id_post=${post_id} AND like_login='${like_login}';`);
   }

   async addLike(id_post, like_login) {
      return await dbConnection.getConnection(`
      INSERT INTO likes ( id_post ,like_login)
      VALUES ('${id_post}', '${like_login}');`);
   }

   async updateTitleByID(post_id, title) {
      return await dbConnection.getConnection(`
         UPDATE posts SET title_post='${title}' WHERE id='${post_id}';`);
   }
   async updateContentByID(post_id, content) {
      return await dbConnection.getConnection(`
         UPDATE posts SET content_post='${content}' WHERE id='${post_id}';`);
   }
   async updateCategoryByID(post_id, category) {
      return await dbConnection.getConnection(`
         UPDATE posts SET name_category='${category}' WHERE id='${post_id}';`);
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