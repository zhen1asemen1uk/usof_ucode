const express = require(`express`);
const router = express.Router();

const UserController = require(`../controllers/UserController`);
const AuthController = require(`../controllers/AuthController`);

const statusMiddleware = require(`./middleware/statusMiddleware`);
const userAccessMiddleware = require(`./middleware/userAccessMiddleware`);

router.get(`/`, UserController.getAllUser);

router.get(`/:user_id`, UserController.getUserByID);

router.post(`/`, statusMiddleware([`admin`]), AuthController.createUser_ADMIN);

router.patch(`/avatar`, UserController.addAvatar);

router.patch(
	`/:user_id`,
	userAccessMiddleware(),
	UserController.updateDataUserByID
);

router.delete(
	`/:user_id`,
	userAccessMiddleware(),
	UserController.deleteUserByID
);

module.exports = router;
