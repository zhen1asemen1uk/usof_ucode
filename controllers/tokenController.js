const Controller = require(`./controller`);
const tokenModel = require(`../models/tokenModel`);
class Token extends Controller {
   constructor() {
      super();
   }

   async getToken(user_id) {
      try {
         return await tokenModel.getToken(user_id);
      } catch (error) {
         res.send(error);
      }
   }

   async refreshToken(user_id, refreshToken) {
      try {
         return await tokenModel.refreshToken(user_id, refreshToken);
      } catch (error) {
         res.send(error);
      }
   }

   async save(user_id, refreshToken) {
      try {
         return await tokenModel.save(user_id, refreshToken);
      } catch (error) {
         res.send(error);
      }
   }
   async delete(refreshToken) {
      try {
         return await tokenModel.delete(refreshToken);
      } catch (error) {
         res.send(error);
      }
   }

   async getTokenAllInfo(refreshToken) {
      try {
         return await tokenModel.getTokenAllInfo(refreshToken);
      } catch (error) {
         res.send(error);
      }
   }
}

module.exports = new Token();