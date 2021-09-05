const tokenController = require("../controllers/tokenController");
const userModel = require("../models/userModel");
const tokenService = require("./tokenService");

class userService {
   constructor() {

   }
   async refresh(refToken) {

      if (!refToken) {
         return console.error(`Error refresh token!!!!!!!!!`);
      }

      const userData = await tokenService.vadateRefreshToken(refToken);
      const tokenFromDB = await tokenController.getToken(refToken);

      if (!userData || !tokenFromDB) {
         return console.error(`Error refresh token!!!!!!!!!`);
      }
      let user = await userModel.getUserByID(userData.id);
      user = user[0][0];

      //generation token
      const token = tokenService.generationToken(user.id, user.login,
         user.email, user.status, user.verify, user.avatar);

      const { accessToken, refreshToken } = token;

      //save token to databases
      await tokenService.saveToken(user.id, refreshToken);

      return {
         ...token, user: { ...user }
      }
   }
}
module.exports = new userService();