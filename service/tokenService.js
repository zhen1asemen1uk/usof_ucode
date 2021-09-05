const tokenController = require(`../controllers/tokenController`);

const { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } = require("../config");

const jwt = require('jsonwebtoken');

class TokenService {
   constructor() {
   }

   generationToken(id, login, email, status, verify, avatar) {
      try {
         const payload = {
            id, login,
            email, status, verify, avatar
         }

         const accessToken = jwt.sign(payload, JWT_ACCESS_SECRET, { expiresIn: "30m" });
         const refreshToken = jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: "30d" });

         return {
            accessToken,
            refreshToken
         }
      } catch (error) {
         console.log(error);
      }

   }

   async vadateAccessToken(accessToken) {
      try {
         const userData = jwt.verify(accessToken, JWT_ACCESS_SECRET);
         return userData
      } catch (error) {
         console.log(error);
         return null
      }
   }

   async vadateRefreshToken(refreshToken) {
      try {
         const userData = jwt.verify(refreshToken, JWT_REFRESH_SECRET);
         return userData
      } catch (error) {
         console.log(error);
         return null
      }
   }

   async saveToken(id, refToken) {
      try {
         const tokenData = await tokenController.getTokenByID(id);

         if (tokenData[0].length > 0) {
            return await tokenController.refreshToken(id, refToken);
         }
         return await tokenController.save(id, refToken);
      } catch (error) {
         console.log(error);
      }
   }

   async removeToken(refreshToken) {
      return await tokenController.delete(refreshToken);
   }

}

module.exports = new TokenService();