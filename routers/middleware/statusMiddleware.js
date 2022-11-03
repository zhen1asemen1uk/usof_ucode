const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

module.exports = function (stat) {
	return function (req, res, next) {
		try {
			const token = req.headers.authorization.split(` `)[1];

			if (!token) {
				return res.status(403).json({ message: `User not loggined` });
			}

			const { status: userStatus } = jwt.verify(
				token,
				JWT_REFRESH_SECRET
			);
			let hasStatus = false;

			stat.forEach((st) => {
				if (st.includes(userStatus)) {
					hasStatus = true;
					console.log(hasStatus);
					next();
				} else {
					console.log(hasStatus);
					return res.status(403).send(`You are not admin!`);
				}
			});
		} catch (error) {
			console.log(error);
			return res.status(403).json({ message: `User not loggined` });
		}
	};
};
