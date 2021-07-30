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

   async checkVerifyUser(login) {
      return await dbConnection.getConnection(`
      SELECT verify FROM users WHERE login='${login}' OR email='${login}';`)
   }

   async getIdUser(user_id) {
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


   async checkDeleteUser(user_id) {
      return await dbConnection.getConnection(`
      SELECT login FROM users WHERE id='${user_id}';`)
   }

   async deleteIdUser(user_id) {
      return await dbConnection.getConnection(`
         DELETE FROM users WHERE id=${user_id};`);
   }
}


module.exports = new userModel();