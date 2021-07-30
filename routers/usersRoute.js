const express = require(`express`);
const router = express.Router();

const statusMiddleware = require(`./middleware/statusMiddleware`);
const deleteMiddleware = require(`./middleware/deleteMiddleware`);

const userController = require(`../controllers/userController`);
const authController = require(`../controllers/authController`);

router.get(`/`, userController.getAllUser);

router.get(`/:user_id`, userController.getIdUser);

router.post(`/`, statusMiddleware([`admin`]), authController.createUser_ADMIN);

router.patch(`/avatar`, (req, res) => {
   res.send(`users patch`)
})
router.patch(`/:user_id`, (req, res) => {
   res.send(`users patch`)
})
router.delete(`/:user_id`,deleteMiddleware(), userController.deleteIdUser);

module.exports = router;