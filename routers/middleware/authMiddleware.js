const TokenService = require('../../service/TokenService');

module.exports = async (req, res, next) => {
	try {
		let authorization = req.headers.authorization;

		if (!authorization) {
			return res.status(403).json({ message: `Error authorization` });
		}

		const accessToken = authorization.split(` `)[1];

		if (!accessToken) {
			return res.status(403).json({ message: `Error token` });
		}
		let userData = await TokenService.validateAccessToken(accessToken);

		if (!userData) {
			return res.status(403).json({ message: `Error token!` });
		}
		req.user = userData;

		return next();
	} catch (error) {
		console.log(error);
		return res.status(403).json({ message: `User not loggined` });
	}
};
