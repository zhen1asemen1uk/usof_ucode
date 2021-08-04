const postModel = require("../models/postModel");
const Controller = require(`./controller`)

class postController extends Controller {
   constructor() {
      super();
   }
   async getAllPosts(req, res) {
      try {
         const posts = await postModel.getAllPosts();

         return res.json(posts[0])
      } catch (error) {
         res.send(error);
      }
   }

   async getPostByID(req, res) {
      try {
         if (req.params.post_id >= 1) {
            const post_id = req.params.post_id;
            let post = await postModel.getPostByID(post_id);

            return res.json(post[0]);
         } else {
            return res.send(`Error post id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(error);
      }
   }

   async getCommentByPostID(req, res) {
      try {
         const post_id = req.params.post_id;
         let comments = await postModel.getCommentByPostID(post_id);

         return res.json(comments[0]);
      } catch (error) {
         console.log(error);
         res.send(error);
      }
   }

   async createComment(req, res) {
      try {
         if (req.body.content_comment) {
            const post_id = req.params.post_id;
            const content = req.body.content_comment;
            let autor = 0;

            if (req.user && req.user.id) {
               autor = req.user.id;
            }

            const createComment = await postModel.createComment(post_id, autor, content);
            return res.send('Comment add!')
         } else {
            return res.send('Comment must be filled!');

         }
      } catch (error) {
         console.log(error);
         res.send(`Error comment`);
      }
   }

   async getCategoriesByPostID(req, res) {
      try {
         const post_id = req.params.post_id;
         let categories = await postModel.getCategoriesByPostID(post_id);

         return res.json(categories[0]);
      } catch (error) {
         console.log(error);
         res.send(error);
      }
   }
   async getAllLikeByPostID(req, res) {
      try {
         if (req.params.post_id >= 1) {
            const post_id = req.params.post_id;
            let likes = await postModel.getAllLikeByPostID(post_id);

            return res.json(likes[0]);
         } else {
            return res.send(`Error post id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(error);
      }
   }

   async createPost(req, res) {
      try {
         if (req.body.title && req.body.content && req.body.category) {
            const { title, content, category } = req.body;

            if (!category) {
               category = 'Other';
            }

            let id_author_post = 0;

            if (req.user && req.user.id) {
               id_author_post = req.user.id;
            }

            const createPost = await postModel.createPost(title, content, category, id_author_post);

            return res.send('Post add!');
         } else {
            return res.send('Title, content and category must be filled!');
         }
      } catch (error) {
         console.log(error);
         res.send(`Error create Post`);
      }
   }

   async addLike(req, res) {
      try {
         const post_id = req.params.post_id;

         let like_login = `people`;

         if (req.user && req.user.login) {
            like_login = req.user.login;
         }

         if (like_login !== `people`) {
            const checkLike = await postModel.checkLike(post_id, like_login);

            if (checkLike[0].length > 0) {
               return res.send('I know you Liked!');;
            }
         }
         const addLike = await postModel.addLike(post_id, like_login);
         return res.send('Liked!');

      } catch (error) {
         console.log(error);
         res.send(`Error 'bad like' :'(`);
      }

   }

   async updatePostByID(req, res) {
      try {
         if (req.params.post_id >= 1) {
            const postAutorId = await postModel.getPostByID(req.params.post_id);
            const post_id = req.params.post_id;
            const { title, content, category } = req.body;

            if (req.user.id == postAutorId[0][0].id_author_post) {

               if (title) {
                  const updateTitleByID = await postModel.updateTitleByID(post_id, title);
               }
               if (content) {
                  const updateContentByID = await postModel.updateContentByID(post_id, content);
               }
               if (category) {
                  const updateCategoryByID = await postModel.updateCategoryByID(post_id, category);
               }

               return res.send(`Post update!`);
            } else {
               return res.send(`Access is closed !`);
            }
         } else {
            return res.send(`Error post id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error update post!`);
      }
   }

   async deletePostByID(req, res) {
      try {
         if (req.params.post_id >= 1) {
            const post_id = req.params.post_id;
            const postDelet = await postModel.deletePostByID(post_id);

            res.send(`Success deleted!`)
         } else {
            return res.send(`Error post id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error deleted!`)
      }
   }

   async deleteLikeFromPostByID(req, res) {
      try {
         if (req.params.post_id >= 1) {
            const post_id = req.params.post_id;

            let like_login = `people`;

            if (req.user && req.user.login) {
               like_login = req.user.login;
            }

            const deleteLikeFromPostByID = await postModel.deleteLikeFromPostByID(post_id, like_login);

            res.send(`Unliked`);
         } else {
            return res.send(`Error post id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error deleted like!`)
      }
   }
}
module.exports = new postController();