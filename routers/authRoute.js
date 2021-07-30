const express = require(`express`);
const router = express.Router();

const authController = require(`../controllers/authController`);
const verifyMiddleware = require(`./middleware/verifyMiddleware`);

router.post(`/register`, authController.register);

router.post(`/login`, verifyMiddleware(), authController.login);

router.post(`/logout`, authController.logout);

router.post(`/password-reset`, verifyMiddleware(), authController.password_reset);

router.post(`/password-reset/:confirm_token`, authController.password_reset_confirm)

module.exports = router;