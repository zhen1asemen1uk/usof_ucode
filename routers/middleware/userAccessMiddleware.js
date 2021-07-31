const userController = require("../../controllers/userController");

const { JWT_REFRESH_SECRET } = require("../../config");

const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel");

module.exports = function () {
   return async function (req, res, next) {
      try {
         if (req.cookies.refreshToken) {

            //decoded login from cookies
            const { refreshToken } = req.cookies;
            const decodedToken = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

            const user_id = req.params.user_id;
            const userForChange = await userModel.getUserByID(user_id);

            if (userForChange[0].length > 0) {

               if (decodedToken.login == userForChange[0][0].login) {

                  return next();
               }
               return res.send(`You can't delete/update ${userForChange[0][0].login}!`);
            } else {
               return res.send(`Uncorrect user id`);
            }
         } else {
            return res.send(`Login please`);
         }
      } catch (error) {
         console.log(error);
      }
   }
}
