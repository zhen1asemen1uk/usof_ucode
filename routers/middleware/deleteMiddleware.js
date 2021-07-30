const userController = require("../../controllers/userController");

const { JWT_REFRESH_SECRET } = require("../../config");

const jwt = require("jsonwebtoken");

module.exports = function () {
   return async function (req, res, next) {
      try {
         if (req.cookies.refreshToken) {

            //decoded login from cookies
            const { refreshToken } = req.cookies;
            const decodedToken = jwt.verify(refreshToken, JWT_REFRESH_SECRET);

            const user_id = req.params.user_id;
            let loginForDel = await userController.checkDeleteUser(user_id);

            if (loginForDel[0].length > 0) {
               loginForDel = loginForDel[0][0].login;

               if (decodedToken.login == loginForDel) {
                  return next();
               }
               return res.send(`You can't del ${loginForDel}!`);
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
