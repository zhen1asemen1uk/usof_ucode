const Model = require(`./model`);

const DbConnection = require(`../db/DbConnection`);

class TokenModel extends Model {
	constructor() {
		super();
	}

	async getTokenByID(user_id) {
		return await DbConnection.getConnection(`
      SELECT refreshToken FROM tokens WHERE user_id=${user_id};`);
	}

	async getToken(refreshToken) {
		return await DbConnection.getConnection(`
      SELECT * FROM tokens WHERE refreshToken='${refreshToken}';`);
	}

	async refreshToken(user_id, refreshToken) {
		return await DbConnection.getConnection(`
      UPDATE tokens SET refreshToken='${refreshToken}'
      WHERE user_id='${user_id}';`);
	}

	async save(user_id, refreshToken) {
		return await DbConnection.getConnection(`
      INSERT INTO tokens (user_id, refreshToken)
      VALUES ('${user_id}','${refreshToken}');`);
	}
	async delete(refreshToken) {
		return await DbConnection.getConnection(`
      DELETE FROM tokens WHERE refreshToken='${refreshToken}';`);
	}

	async getTokenAllInfo(refreshToken) {
		return await DbConnection.getConnection(`
      SELECT * FROM tokens WHERE refreshToken='${refreshToken}';`);
	}
}

module.exports = new TokenModel();
