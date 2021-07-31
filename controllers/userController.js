const Controller = require(`./controller`);
const userModel = require(`../models/userModel`);

const sendMailService = require("../service/sendMailService");
const tokenService = require("../service/tokenService");

const { API_URL } = require(`../config`);

const bcrypt = require(`bcryptjs`);
const uuid = require(`uuid`);


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

   async getUserByID(req, res) {
      try {
         const user_id = req.params.user_id;
         let user = await userModel.getUserByID(user_id);

         return res.json(user[0]);
      } catch (error) {
         console.log(error);
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

   async deleteUserByID(req, res) {
      try {
         await userModel.deleteUserByID(req.params.user_id);

         // cookies???

         res.send(`User deleted!`)
      } catch (error) {
         res.send(error)
      }
   }

   async updateDataUserByID(req, res) {
      try {
         const { login, password, email, photo, status, verify } = req.body;
         const owner = req.params.user_id;

         //check unique users
         let check = await userModel.getUser(login, email);
         let [rows, fields] = check;

         if (rows.length > 0) {
            return res.send(`Login or email is already in use!`);
         } else {
            if (login) {
               const updateLogin = await userModel.updateLoginByID(owner, login);
               console.log(`Login - ok`)
            }

            if (email) {
               const updateEmail = await userModel.updateEmailByID(owner, email);
               //create verify link
               const activationLink = uuid.v4();
               //update link
               const updateActivationLink = await userModel.updateActivationLink(owner, activationLink);
               //send emaid
               const sendActivationMail = await sendMailService.sendActivationMail(email, `${API_URL}/activate/${activationLink}`);
               console.log(`Email - ok`)
            }
         }
         if (photo) {
            const updatePhoto = await userModel.updatePhotoByID(owner, photo);
            console.log(`Photo - ok`);
         }
         if (password) {
            //hash password
            const hashPass = await bcrypt.hash(password, 3);
            const updatePassword = await userModel.updatePasswordByID(owner, hashPass);
            console.log(`Password - ok`);
         }

         //generation token
         const token = tokenService.generationToken(owner, login, email, status, verify);

         const { accessToken, refreshToken } = token;
         //save token to databases

         const saveToken = await tokenService.saveToken(owner, refreshToken);

         //send cookies token
         res.cookie(`refreshToken`, refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //when `https` add secure!

         res.send(`User updated!`)
      } catch (error) {
         console.log(`err`);
         res.send(error);
      }
   }
}


module.exports = new userController();