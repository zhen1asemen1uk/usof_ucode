const TokenController = require('../controllers/TokenController');
const UserModel = require('../models/UserModel');
const TokenService = require('./TokenService');

class UserService {
	constructor() {}
	async refresh(refToken) {
		if (!refToken) {
			return console.error(`Error refresh token!`);
		}

		const userData = await TokenService.vadateRefreshToken(refToken);
		const tokenFromDB = await TokenController.getToken(refToken);

		if (!userData || !tokenFromDB) {
			return console.error(`Error refresh token, user unAuthorized !!!`);
		}

		let user = await UserModel.getUserByID(userData.id);
		user = user[0][0];

		//generation token
		const token = TokenService.generationToken(
			user.id,
			user.login,
			user.email,
			user.status,
			user.verify,
			user.avatar
		);

		const { accessToken, refreshToken } = token;

		//save token to databases
		await TokenService.saveToken(user.id, refreshToken);

		return {
			...token,
			user: { ...user },
		};
	}
}
module.exports = new UserService();
