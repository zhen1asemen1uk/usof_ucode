
const Controller = require(`./controller`);

const postModel = require(`../models/postModel`);
const categoryModel = require("../models/categoryModel");

class categoryController extends Controller {
   constructor() {
      super();
   }

   async getAllCategories(req, res) {
      try {
         const categories = await categoryModel.getAllCategories();

         return res.json(categories[0]);
      } catch (error) {
         console.log(error);
         res.send(`Error get all categories!`);
      }
   }

   async getDataByCategory_ID(req, res) {
      try {
         const category_id = req.params.category_id;
         const data = await categoryModel.getDataByCategory_ID(category_id);

         return res.json(data[0]);
      } catch (error) {
         console.log(error);
         res.send(`Error get data by category!`);
      }
   }

   async getPostsByCategoriesID(req, res) {
      try {
         const category_id = req.params.category_id;
         const posts = await categoryModel.getPostsByCategoriesID(category_id);

         //mby else "category_id"

         // const posts = await categoryModel.getDataByCategory_Title(category_id);

         // let allPosts = [];
         // let post;

         // for (let i = 0; i < posts[0].length; i++) {
         //    if (!posts[0][i].id_post == 0) {
         //       allPosts.push(posts[0][i].id_post);
         //    }
         // }

         const id_post = posts[0][0].id_post;
         const post = await postModel.getPostByID(id_post);

         return res.json(post[0]);
      } catch (error) {
         console.log(error);
         res.send(`Error get post by category!`);
      }
   }

   async createCategory(req, res) {
      try {
         if (req.body.title) {
            const { title } = req.body;
            let post_id = 0;
            let id_author = 0;

            if (req.user && req.user.id) {
               id_author = req.user.id;
            }

            const category = await categoryModel.createCategory(post_id, id_author, title);

            return res.send(`Category ${title} created!`);
         } else {
            res.send(`Error title category!`)
         }
      } catch (error) {
         console.log(error);
         res.send(`Error create category!`);
      }
   }
   async updateCategoryByID(req, res) {
      try {
         if (req.params.category_id >= 1) {
            const category_id = req.params.category_id;
            const categoryAutorId = await categoryModel.getDataByCategory_ID(category_id);

            if (req.user.id == categoryAutorId[0][0].id_author_category) {


               if (req.body.title) {
                  const { title } = req.body;
                  const updateCategoryByID = await categoryModel.updateCategoryByID(category_id, title);

                  return res.send(`Category update!`);
               } else {
                  return res.send(`Error title!`);
               }
            } else {
               return res.send(`Access is closed !`);
            }
         } else {
            return res.send(`Error category id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error update post!`);
      }
   }

   async deleteCategoryByID(req, res) {
      try {
         if (req.params.category_id >= 1) {
            const category_id = req.params.category_id;
            const categoryAutorId = await categoryModel.getDataByCategory_ID(category_id);

            if (req.user.id == categoryAutorId[0][0].id_author_category) {
               const deleted = await categoryModel.deleteCategoryByID(category_id);

               return res.send(`Category deleted!`);
            } else {
               return res.send(`Access is closed !`);
            }
         } else {
            return res.send(`Error category id!`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error delete!`);
      }
   }
}

module.exports = new categoryController();