const jwt = require("jsonwebtoken");
const { JWT_REFRESH_SECRET } = require("../../config");

module.exports = function (req, res, next) {
   try {

      let authorization = req.headers.authorization;
      if (!authorization){
         return res.status(403).json({ message: `Error authorization` });
      }
      const token = authorization.split(` `)[1];

      if (!token) {
         return res.status(403).json({ message: `Error token` });
      }
      const decodedToken = jwt.verify(token, JWT_REFRESH_SECRET);
      req.user = decodedToken;

      next();
   } catch (error) {
      return res.status(403).json({ message: `User not loggined` });
   }
};