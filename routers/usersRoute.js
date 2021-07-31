const express = require(`express`);
const router = express.Router();

const statusMiddleware = require(`./middleware/statusMiddleware`);
const userAccessMiddleware = require(`./middleware/userAccessMiddleware`);

const userController = require(`../controllers/userController`);
const authController = require(`../controllers/authController`);

router.get(`/`, userController.getAllUser);

router.get(`/:user_id`, userController.getUserByID);

router.post(`/`, statusMiddleware([`admin`]), authController.createUser_ADMIN);

router.patch(`/avatar`, (req, res) => {
   res.send(`users patch`)
})
router.patch(`/:user_id`, userAccessMiddleware(), userController.updateDataUserByID);

router.delete(`/:user_id`, userAccessMiddleware(), userController.deleteUserByID);

module.exports = router;