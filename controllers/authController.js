const Controller = require(`./controller`);
const tokenController = require(`./tokenController`);

const userModel = require(`../models/userModel`);

const { API_URL } = require(`../config`);

const sendMailService = require(`../service/sendMailService`);
const tokenService = require(`../service/tokenService`);
const userService = require(`../service/userService`);

const bcrypt = require(`bcryptjs`);
const uuid = require(`uuid`);

class authController extends Controller {
   constructor() {
      super();
   }

   async register(req, res) {
      try {
         const { login, password, password_confirm, email, avatar = `user.jpg` } = req.body;

         if (password.length >= 8 && password === password_confirm) {
            //check unique users
            let check = await userModel.getUser(login, email);
            let [rows, fields] = check;

            if (rows.length > 0) {
               return res.send(`Login or email is already in use!`);
            } else {
               //hash password
               let hashPass = await bcrypt.hash(password, 3);

               //create verify link
               const activationLink = uuid.v4();

               //add user to database
               await userModel.addUser(login, hashPass, email, avatar, activationLink);

               let check = await userModel.getUser(login, email);
               let [rows, fields] = check;
               let user = rows[0];

               //generation token
               const token = tokenService.generationToken(user.id, user.login,
                  user.email, user.status, user.verify, user.avatar);

               const { accessToken, refreshToken } = token;

               //save token to databases
               await tokenService.saveToken(user.id, refreshToken);

               //send emaid
               await sendMailService.sendActivationMail(email, `${API_URL}/activate/${activationLink}`);

               //send cookies token
               res.cookie(`refreshToken`, refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //when `https` add secure!

               return res.json({
                  ...token, user: { id: user.id, login: user.login, email: user.email, status: user.status, verify: user.verify, avatar: user.avatar }
               });
            }
         } else {
            return res.send(`Password length is less than 8 characters or check confirm password`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error register!`)
      }
   }

   async login(req, res) {
      try {
         const { login, password } = req.body;

         if (!login || !password) {
            return res.send(`Empty login/email or password!`);
         }

         let check = await userModel.loginUser(login);
         let [rows, fields] = check;
         let user = rows[0];

         if (!(await bcrypt.compare(password, user.password))) {
            return res.send(`Login email or password incorrect`)
         }
         //generation token
         const token = tokenService.generationToken(user.id, user.login,
            user.email, user.status, user.verify, user.avatar);

         const { accessToken, refreshToken } = token;

         //save token to databases
         await tokenService.saveToken(user.id, refreshToken);

         //save token to cookies
         res.cookie(`refreshToken`, refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //when `https` add secure!

         return res.json({
            ...token, user: { id: user.id, login: user.login, email: user.email, status: user.status, verify: user.verify, avatar: user.avatar }
         });
      } catch (error) {
         console.log(error);
         res.send(`Error login!`);
      }
   }

   async logout(req, res) {
      try {
         const { refreshToken } = req.cookies;

         //remove token from database
         await tokenService.removeToken(refreshToken);

         //delete token from cookies
         res.clearCookie(`refreshToken`);

         return res.send(`Happy logout!`);
      } catch (error) {
         console.log(error);
         res.send(`Error logout!`)
      }
   }

   async refresh(req, res) {
      try {
         const { refreshToken } = req.cookies;

         const refresh = await userService.refresh(refreshToken);
         
         //save token to cookies
         res.cookie(`refreshToken`, refresh.refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //when `https` add secure!

         return res.json({ refresh });
      } catch (error) {
         console.log(error);
         res.send(`Error refreshToken`)
      }
   }

   async password_reset(req, res) {
      try {
         const { login, newPassword } = req.body;

         if (!login || !newPassword) {
            return res.send(`Write you login/email or new password please!`)
         }

         let resolt = await userModel.loginUser(login);
         const [rows, fields] = resolt;

         if (!rows[0]) {
            return res.send(`Unknown user.`);
         }

         let token = await tokenController.getTokenByID(rows[0].id);
         token = token[0][0].refreshToken;

         //send email and new password
         await sendMailService.sendNewPassword(rows[0].email, newPassword, token);

         return res.send(`Check you email.`);
      } catch (error) {
         console.log(error);
         res.send(`Error reset password`)
      }
   }

   async password_reset_confirm(req, res) {
      try {
         const { confirm_token } = req.params;

         const token = confirm_token.split(`__||__`)[0];
         const pass = confirm_token.split(`__||__`)[1];

         let id = await tokenController.getTokenAllInfo(token);
         id = id[0][0].user_id;

         //hash new password
         const hashPass = await bcrypt.hash(pass, 3);

         await userModel.resetPass_userId(id, hashPass);

         return res.send(`Happy reset pass!!!`)
      } catch (error) {
         console.log(error);
         res.send(`Error reset password`)
      }
   }

   async createUser_ADMIN(req, res) {
      try {
         const { login, password, password_confirm, email, avatar = `user.jpg`, status, verify } = req.body;

         if (password.length >= 8 && password === password_confirm) {
            //check unique users
            let check = await userModel.getUser(login, email);
            let [rows, fields] = check;

            console.log(rows.length);

            if (rows.length > 0) {
               return res.send(`Login or email is already in use!`);
            } else {
               //hash password
               let hashPass = await bcrypt.hash(password, 3);
               //create verify link
               const activationLink = uuid.v4();
               //add user data
               await userModel.addUser_ADMIN(login, hashPass, email, avatar, status, verify, activationLink);
               let check = await userModel.getUser(login, email);
               let [rows, fields] = check;
               let user = rows[0];
               //generation token
               const token = tokenService.generationToken(user.id, user.login,
                  user.email, user.status, user.verify, user.avatar);
               const { accessToken, refreshToken } = token;
               //save token to databases
               await tokenService.saveToken(user.id, refreshToken);
               //send email
               await sendMailService.sendActivationMail(email, `${API_URL}/activate/${activationLink}`);
               //save token to cookies
               res.cookie(`refreshToken`, refreshToken, { maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true }); //when `https` add secure!

               return res.json({
                  ...token, user: { id: user.id, login: user.login, email: user.email, status: user.status, verify: user.verify, avatar: user.avatar }
               });
            }
         } else {
            return res.send(`Password length is less than 8 characters or check confirm password`);
         }
      } catch (error) {
         console.log(error);
         res.send(`Error create!`);
      }
   }
}


module.exports = new authController();
