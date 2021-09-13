const jwt = require("jsonwebtoken");

const { JWT_REFRESH_SECRET, JWT_ACCESS_SECRET } = require("../../config");
const tokenService = require("../../service/tokenService");

module.exports = function (req, res, next) {
   try {
      let authorization = req.headers.authorization;

      if (!authorization) {
         return res.status(403).json({ message: `Error authorization` });
      }

      const accessToken = authorization.split(` `)[1];

      if (!accessToken) {
         return res.status(403).json({ message: `Error token` });
      }
      let userData = tokenService.validateAccessToken(accessToken);

      if (!userData) {
         return res.status(403).json({ message: `Error token!` });
      }
      // const decodedToken = jwt.verify(token, JWT_REFRESH_SECRET);
      // const decodedToken = jwt.verify(token, JWT_ACCESS_SECRET);
      req.user = userData;

      return next();

   } catch (error) {
      console.log(error);
      return res.status(403).json({ message: `User not loggined` });
   }
};