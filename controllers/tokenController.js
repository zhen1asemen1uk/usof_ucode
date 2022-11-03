const Controller = require(`./controller`);

const TokenModel = require(`../models/TokenModel`);
class TokenController extends Controller {
	constructor() {
		super();
	}

	async getTokenByID(user_id) {
		try {
			return await TokenModel.getTokenByID(user_id);
		} catch (error) {
			console.log(error);
			res.send(`Error get token`);
		}
	}
	async getToken(refreshToken) {
		try {
			return await TokenModel.getToken(refreshToken);
		} catch (error) {
			console.log(error);
			res.send(`Error get token`);
		}
	}

	async refreshToken(user_id, refreshToken) {
		try {
			return await TokenModel.refreshToken(user_id, refreshToken);
		} catch (error) {
			console.log(error);
			res.send(`Error refresh token`);
		}
	}

	async save(user_id, refreshToken) {
		try {
			return await TokenModel.save(user_id, refreshToken);
		} catch (error) {
			console.log(error);
			res.send(`Error save token`);
		}
	}
	async delete(refreshToken) {
		try {
			return await TokenModel.delete(refreshToken);
		} catch (error) {
			console.log(error);
			res.send(`Error delete token`);
		}
	}

	async getTokenAllInfo(refreshToken) {
		try {
			return await TokenModel.getTokenAllInfo(refreshToken);
		} catch (error) {
			console.log(error);
			res.send(`Error get info token`);
		}
	}
}

module.exports = new TokenController();
