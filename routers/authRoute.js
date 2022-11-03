const express = require(`express`);
const router = express.Router();

const AuthController = require(`../controllers/AuthController`);

const verifyMiddleware = require(`./middleware/verifyMiddleware`);

router.post(`/register`, AuthController.register);

router.post(`/login`, verifyMiddleware(), AuthController.login);

router.post(`/logout`, AuthController.logout);

router.get(`/refresh`, AuthController.refresh);

router.post(
	`/password-reset`,
	verifyMiddleware(),
	AuthController.password_reset
);

router.post(
	`/password-reset/:confirm_token`,
	AuthController.password_reset_confirm
);

module.exports = router;
