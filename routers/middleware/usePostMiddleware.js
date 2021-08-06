const jwt = require("jsonwebtoken");

const { JWT_REFRESH_SECRET } = require("../../config");

const postModel = require("../../models/postModel");

module.exports = function () {
   return async function (req, res, next) {
      try {
         const post_id = req.params.post_id;
         if (req.cookies.refreshToken) {

            //decoded login from cookies
            const { refreshToken } = req.cookies;
            const decodedToken = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

            const getPost = await postModel.getPostByID(post_id);

            if (getPost[0][0].id_author_post < 1) {
               return res.send(`Error access denied!`);
            }

            if (decodedToken.id == getPost[0][0].id_author_post) {
               return next();
            } else {
               return res.send(`You can't delete/update this post!`);
            }
         } else {
            return res.send(`Login please`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error access denied!`);
      }
   }
}
