const dbConnection = require("../db/dbConnection");
const Model = require(`./model`)

class postModel extends Model {
   constructor() {
      super();
   }
   async getAllPosts(page,size) {
      return await dbConnection.getConnection(`
      SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post ORDER BY 6 DESC ;`);
      // SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post ORDER BY 6 DESC LIMIT ${page},${size};`);
   }
   async getPostByID(id) {
      return await dbConnection.getConnection(`
      SELECT * FROM posts WHERE id=${id};`);
   }

   async getPostByUserID(id) {
      return await dbConnection.getConnection(`
      SELECT * FROM users INNER JOIN posts ON users.id=posts.id_author_post WHERE id_author_post=${id};`);
   }

   async createPost(title_post, content_post, id_author_post) {
      return await dbConnection.getConnection(`
      INSERT INTO posts (title_post, content_post,id_author_post)
      VALUES ('${title_post}', '${content_post}','${id_author_post}');`);
   }

   async updateTitleByID(post_id, title_post) {
      return await dbConnection.getConnection(`
      UPDATE posts SET title_post='${title_post}' WHERE id='${post_id}';`);
   }
   async updateContentByID(post_id, content_post) {
      return await dbConnection.getConnection(`
      UPDATE posts SET content_post='${content_post}' WHERE id='${post_id}';`);
   }

   async deletePostByID(post_id) {
      return await dbConnection.getConnection(`
      DELETE FROM posts WHERE id=${post_id};`);
   }

}
module.exports = new postModel();