const express = require(`express`);
const router = express.Router();

const userController = require(`../controllers/userController`);
const authController = require(`../controllers/authController`);

const statusMiddleware = require(`./middleware/statusMiddleware`);
const userAccessMiddleware = require(`./middleware/userAccessMiddleware`);

router.get(`/`, userController.getAllUser);

router.get(`/:user_id`, userController.getUserByID);

router.post(`/`, statusMiddleware([`admin`]), authController.createUser_ADMIN);

router.patch(`/avatar`, userController.addAvatar);

router.patch(`/:user_id`, userAccessMiddleware(), userController.updateDataUserByID);

router.delete(`/:user_id`, userAccessMiddleware(), userController.deleteUserByID);

module.exports = router; 