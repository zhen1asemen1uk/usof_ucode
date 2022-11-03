const UserController = require('../../controllers/UserController');

module.exports = function () {
	return async function (req, res, next) {
		try {
			if (!req.body.login) {
				return res.send(`Error empty login!`);
			}
			const login = req.body.login;
			let verify = await UserController.checkVerifyUser(login);

			if (verify && verify[0] && verify[0].length > 0) {
				verify = verify[0][0].verify;

				if (verify == 'true') {
					return next();
				}
			}

			return res.send(`Login email or password incorrect`);
		} catch (error) {
			console.log(error);
			res.send(`Error verify middlewear!`);
		}
	};
};
