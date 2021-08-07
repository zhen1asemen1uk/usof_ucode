const express = require(`express`);
const router = express.Router();

const authRoute = require(`./authRoute`)
const categoriesRoute = require(`./categoriesRoute`);
const commentsRoute = require(`./commentsRoute`);
const postsRoute = require(`./postsRoute`);
const usersRoute = require(`./usersRoute`);

const userController = require(`../controllers/userController`);

const authMiddleware = require(`./middleware/authMiddleware`);

router.get(`/activate/:link`, userController.activateUser);

router.use(`/api/auth`, authRoute);
router.use(`/api/categories`, categoriesRoute);
router.use(`/api/comments`, commentsRoute);
router.use(`/api/posts`, postsRoute);
router.use(`/api/users`, authMiddleware, usersRoute);

module.exports = router;