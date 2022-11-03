const Model = require(`./model`);
const DbConnection = require(`../db/DbConnection`);

class UserModel extends Model {
	constructor() {
		super();
	}
	async getAllUser() {
		return await DbConnection.getConnection(`
      SELECT id, avatar, login, email, status, verify FROM users;`);
	}

	async getUser(login, email) {
		return await DbConnection.getConnection(`
      SELECT * FROM users WHERE login = "${login}" OR email = "${email}";`);
	}

	async addUser(login, password, email, avatar, activationLink) {
		return await DbConnection.getConnection(`
      INSERT INTO users (login, password, email, avatar, activationLink)
      VALUES ('${login}', '${password}', '${email}', '${avatar}', '${activationLink}');`);
	}
	async loginUser(login) {
		return await DbConnection.getConnection(`
      SELECT * FROM users WHERE login = "${login}" OR email = "${login}";`);
	}

	async activateUser_check(link) {
		return await DbConnection.getConnection(`
      SELECT * FROM users WHERE activationLink = "${link}";`);
	}
	async activateUser_updateVerify(link) {
		return await DbConnection.getConnection(`
      UPDATE users SET verify='true' WHERE activationLink='${link}';`);
	}

	async updateActivationLink(id, link) {
		return await DbConnection.getConnection(`
      UPDATE users SET activationLink='${link}' WHERE id='${id}';`);
	}

	async checkVerifyUser(login) {
		return await DbConnection.getConnection(`
      SELECT verify FROM users WHERE login='${login}' OR email='${login}';`);
	}

	async getUserByID(user_id) {
		return await DbConnection.getConnection(`
      SELECT  id, avatar, login,email, status, verify FROM users WHERE id=${user_id};`);
	}

	async resetPass_userId(id, pass) {
		return await DbConnection.getConnection(`
      UPDATE users SET password='${pass}' WHERE id='${id}';`);
	}

	async addUser_ADMIN(
		login,
		password,
		email,
		avatar,
		status,
		verify,
		activationLink
	) {
		return await DbConnection.getConnection(`
      INSERT INTO users (login, password, email, avatar, status, verify, activationLink)
      VALUES ('${login}', '${password}', '${email}', '${avatar}', '${status}','${verify}', '${activationLink}');`);
	}

	async deleteUserByID(user_id) {
		return await DbConnection.getConnection(`
      DELETE FROM users WHERE id=${user_id};`);
	}

	async updateLoginByID(owner, login) {
		return await DbConnection.getConnection(`
      UPDATE users SET login='${login}' WHERE id='${owner}';`);
	}

	async updateEmailByID(owner, email) {
		return await DbConnection.getConnection(`
      UPDATE users SET email='${email}', verify='false' WHERE id='${owner}';`);
	}

	async updatePasswordByID(owner, password) {
		return await DbConnection.getConnection(`
      UPDATE users SET password='${password}' WHERE id='${owner}';`);
	}

	async updateAvatarByID(owner, avatar) {
		return await DbConnection.getConnection(`
      UPDATE users SET avatar='${avatar}' WHERE id='${owner}';`);
	}
}

module.exports = new UserModel();
