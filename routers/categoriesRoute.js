const express = require('express');
const router = express.Router();

const CategoryController = require('../controllers/CategoryController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/`, CategoryController.getAllCategories);

router.get(`/:category_id`, CategoryController.getDataByCategory_ID);

router.get(`/:category_id/posts`, CategoryController.getPostsByCategoriesID);

router.post(`/`, authMiddleware, CategoryController.createCategory);

router.patch(
	`/:category_id`,
	authMiddleware,
	CategoryController.updateCategoryByID
);

router.delete(
	`/:category_id`,
	authMiddleware,
	CategoryController.deleteCategoryByID
);

module.exports = router;
