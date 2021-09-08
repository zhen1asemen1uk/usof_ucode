const jwt = require("jsonwebtoken");

const { JWT_REFRESH_SECRET, JWT_ACCESS_SECRET } = require("../../config");

module.exports = function (req, res, next) {
   try {
      let authorization = req.headers.authorization;

      if (!authorization) {
         return res.status(403).json({ message: `Error authorization` });
      }

      const token = authorization.split(` `)[1];

      if (!token) {
         return res.status(403).json({ message: `Error token` });
      }

      // const decodedToken = jwt.verify(token, JWT_REFRESH_SECRET);
      const decodedToken = jwt.verify(token, JWT_ACCESS_SECRET);
      req.user = decodedToken;

      return next();

   } catch (error) {
      console.log(error);
      return res.status(403).json({ message: `User not loggined` });
   }
};