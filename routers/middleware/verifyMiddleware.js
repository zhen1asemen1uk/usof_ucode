const userController = require("../../controllers/userController");

module.exports = function () {
   return async function (req, res, next) {
      try {
         const login = req.body.login;
         let verify = await userController.checkVerifyUser(login);

         if (verify[0].length > 0) {
            verify = verify[0][0].verify;
            console.log(verify);

            if (verify == "true") {
               console.log(verify);

               return next();
            }
         }

         return res.send(`Please check you email (maybe spam) or register`);
      } catch (error) {
         res.send(error)
      }
   }
}
