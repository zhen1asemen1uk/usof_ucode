const Model = require(`./model`);
const dbConnection = require(`../db/dbConnection`);

class userModel extends Model {
   constructor() {
      super();
   }
   async getUser(login, email) {
      return await dbConnection.getConnection(`
      SELECT * FROM users WHERE login = "${login}" OR email = "${email}";`);
   }

   async addUser(login, password, email, photo, activationLink) {
      return await dbConnection.getConnection(`
      INSERT INTO users (login, password, email, photo, activationLink)
      VALUES ('${login}', '${password}', '${email}', '${photo}', '${activationLink}');`);
   }
   async loginUser(login) {
      return await dbConnection.getConnection(`
      SELECT * FROM users WHERE login = "${login}" OR email = "${login}";`);
   }

   async getAllUser() {
      return await dbConnection.getConnection(`
         SELECT id, photo, login, email, status, verify FROM users;`);
   }

   async activateUser_check(link) {
      return await dbConnection.getConnection(`
      SELECT * FROM users WHERE activationLink = "${link}";`)
   }
   async activateUser_updateVerify(link) {
      return await dbConnection.getConnection(`
         UPDATE users SET verify='true' WHERE activationLink='${link}';`);
   }

   async updateActivationLink(id, link) {
      return await dbConnection.getConnection(`
         UPDATE users SET activationLink='${link}' WHERE id='${id}';`);
   }

   async checkVerifyUser(login) {
      return await dbConnection.getConnection(`
      SELECT verify FROM users WHERE login='${login}' OR email='${login}';`)
   }

   async getUserByID(user_id) {
      return await dbConnection.getConnection(`
         SELECT  id, photo, login,email, status, verify FROM users WHERE id=${user_id};`);
   }

   async resetPass_userId(id, pass) {
      return await dbConnection.getConnection(`
         UPDATE users SET password='${pass}' WHERE id='${id}';`);
   }

   async addUser_ADMIN(login, password, email, photo, status, verify, activationLink) {
      return await dbConnection.getConnection(`
         INSERT INTO users (login, password, email, photo, status, verify, activationLink)
         VALUES ('${login}', '${password}', '${email}', '${photo}', '${status}','${verify}', '${activationLink}');`);
   }

   async deleteUserByID(user_id) {
      return await dbConnection.getConnection(`
         DELETE FROM users WHERE id=${user_id};`);
   }

   async updateLoginByID(owner, login) {
      return await dbConnection.getConnection(`
         UPDATE users SET login='${login}' WHERE id='${owner}';`);
   }
   async updateEmailByID(owner, email) {
      return await dbConnection.getConnection(`
         UPDATE users SET email='${email}', verify='false' WHERE id='${owner}';`);
   }
   async updatePasswordByID(owner, password) {
      return await dbConnection.getConnection(`
         UPDATE users SET password='${password}' WHERE id='${owner}';`);
   }
   async updatePhotoByID(owner, photo) {
      return await dbConnection.getConnection(`
         UPDATE users SET photo='${photo}' WHERE id='${owner}';`);
   }

}


module.exports = new userModel();