const Controller = require(`./controller`);
const userModel = require(`../models/userModel`);
const { API_URL } = require(`../config`);

class userController extends Controller {
   constructor() {
      super();
   }

   async getUser(login, email) {
      try {
         return await userModel.getUser(login, email);
      } catch (error) {
         res.send(error);
      }
   }

   async addUser(login, password, email, photo, activationLink) {
      try {
         return await userModel.addUser(login, password, email, photo, activationLink);
      } catch (error) {
         res.send(error);
      }
   }

   async loginUser(login) {
      try {
         return await userModel.loginUser(login);
      } catch (error) {
         res.send(error);
      }
   }

   async getAllUser(req, res) {
      try {
         const users = await userModel.getAllUser();

         return res.json(users[0])
      } catch (error) {
         res.send(error);
      }
   }

   async activateUser(req, res) {
      try {
         const link = req.params.link;

         let activeUser = await userModel.activateUser_check(link);

         if (!activeUser[0].length > 0) {
            return console.log(`uncorrect user `);
         }

         await userModel.activateUser_updateVerify(link);

         return res.send(`Happy verify go => ${API_URL}`) // res.redirect()
      } catch (error) {
         res.send(error);
      }
   }

   async checkVerifyUser(login) {
      try {
         return await userModel.checkVerifyUser(login);
      } catch (error) {
         res.send(error);
      }
   }

   async getIdUser(req, res) {
      try {
         const user_id = req.params.user_id;
         const user = await userModel.getIdUser(user_id);

         return res.json(user[0]);
      } catch (error) {
         res.send(error);
      }

   }

   async resetPass_userId(id, pass) {
      try {
         return await userModel.resetPass_userId(id, pass);
      } catch (error) {
         res.send(error);
      }
   }

   async addUser_ADMIN(login, password, email, photo, status, verify, activationLink) {
      try {
         return await userModel.addUser_ADMIN(login, password, email, photo, status, verify, activationLink);
      } catch (error) {
         res.send(error);
      }
   }


   async checkDeleteUser(user_id) {
      try {
         return await userModel.checkDeleteUser(user_id);
      } catch (error) {
         console.log(error);
      }
   }

   async deleteIdUser(req, res) {
      try {
         await userModel.deleteIdUser(req.params.user_id);

         // cookies???

         res.send(`User deleted!`)
      } catch (error) {
         res.send(error)
      }

   }
}


module.exports = new userController();