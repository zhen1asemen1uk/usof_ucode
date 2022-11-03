const Controller = require(`./controller`);
const UserModel = require(`../models/UserModel`);

const SendMailService = require('../service/SendMailService');
const TokenService = require('../service/TokenService');

const bcrypt = require(`bcryptjs`);
const uuid = require(`uuid`);
require('dotenv').config();
const API_URL = process.env.API_URL;
const CLIENT_URL = process.env.CLIENT_URL;

class UserController extends Controller {
	constructor() {
		super();
	}

	async getUser(login, email) {
		try {
			return await UserModel.getUser(login, email);
		} catch (error) {
			console.log(error);
			res.send(`Error get user!`);
		}
	}

	async addUser(login, password, email, avatar, activationLink) {
		try {
			return await UserModel.addUser(
				login,
				password,
				email,
				avatar,
				activationLink
			);
		} catch (error) {
			console.log(error);
			res.send(`Error add user!`);
		}
	}

	async loginUser(login) {
		try {
			return await UserModel.loginUser(login);
		} catch (error) {
			console.log(error);
			res.send(`Error login user!`);
		}
	}

	async getAllUser(req, res) {
		try {
			const users = await UserModel.getAllUser();

			return res.json(users[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get all user!`);
		}
	}

	async activateUser(req, res) {
		try {
			const link = req.params.link;

			let activeUser = await UserModel.activateUser_check(link);

			if (!activeUser[0].length > 0) {
				return res.send(`Uncorrect user!`);
			}

			await UserModel.activateUser_updateVerify(link);

			res.redirect(`${CLIENT_URL}/login`);
		} catch (error) {
			console.log(error);
			res.send(`Error activate user!`);
		}
	}

	async checkVerifyUser(login) {
		try {
			return await UserModel.checkVerifyUser(login);
		} catch (error) {
			console.log(error);
			res.send(`Error check verify user!`);
		}
	}

	async getUserByID(req, res) {
		try {
			const user_id = req.params.user_id;
			let user = await UserModel.getUserByID(user_id);

			return res.json(user[0]);
		} catch (error) {
			console.log(error);
			res.send(`Error get user by id`);
		}
	}

	async resetPass_userId(id, pass) {
		try {
			return await UserModel.resetPass_userId(id, pass);
		} catch (error) {
			console.log(error);
			res.send(`Error reset password`);
		}
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
		try {
			return await UserModel.addUser_ADMIN(
				login,
				password,
				email,
				avatar,
				status,
				verify,
				activationLink
			);
		} catch (error) {
			console.log(error);
			res.send(`Error create user for ADMIN`);
		}
	}

	async deleteUserByID(req, res) {
		try {
			const { refreshToken } = req.cookies;
			await UserModel.deleteUserByID(req.params.user_id);

			//remove token from database
			await TokenService.removeToken(refreshToken);

			//delete token from cookies
			res.clearCookie(`refreshToken`);

			res.send(`User deleted!`);
		} catch (error) {
			console.log(error);
			res.send(`Error delete user!`);
		}
	}

	async updateDataUserByID(req, res) {
		try {
			const { login, password, email } = req.body;
			const owner = req.params.user_id;
			//check unique users
			let check = await UserModel.getUser(login, email);
			let [rows, fields] = check;

			if (rows.length > 0) {
				return res.send(`Login or email is already in use!`);
			}

			if (login) {
				const updateLogin = await UserModel.updateLoginByID(
					owner,
					login
				);
				console.log(`Login - ok`);
			}

			if (email) {
				const updateEmail = await UserModel.updateEmailByID(
					owner,
					email
				);
				//create verify link
				const activationLink = uuid.v4();
				//update link
				const updateActivationLink =
					await UserModel.updateActivationLink(owner, activationLink);
				//send emaid
				const sendActivationMail =
					await SendMailService.sendActivationMail(
						email,
						`${API_URL}/activate/${activationLink}`
					);
				console.log(`Email - ok`);
			}

			if (password) {
				//hash password
				const hashPass = await bcrypt.hash(password, 3);
				const updatePassword = await UserModel.updatePasswordByID(
					owner,
					hashPass
				);
				console.log(`Password - ok`);
			}

			//generation token
			const token = TokenService.generationToken(
				owner,
				login,
				email,
				req.user.status,
				req.user.verify,
				req.user.avatar
			);

			const { accessToken, refreshToken } = token;

			//save token to databases
			const saveToken = await TokenService.saveToken(owner, refreshToken);

			//send cookies token
			res.cookie(`refreshToken`, refreshToken, {
				maxAge: 30 * 24 * 60 * 60 * 1000,
				httpOnly: true,
			}); //when `https` add secure!

			res.send(`User updated!`);
		} catch (error) {
			console.log(error);
			res.send(`Error update user!`);
		}
	}

	async addAvatar(req, res) {
		try {
			let { id } = req.user;

			const avatarFile = req.files.ava;
			const avatarName = uuid.v4() + '.jpg';
			UserModel.updateAvatarByID(id, avatarName);

			avatarFile.mv(`./public/avatar/${avatarName}`);

			return res.send(`Avatar upload!`);
		} catch (error) {
			console.log(error);
			res.send(`Error upload avatar!`);
		}
	}
}

module.exports = new UserController();
