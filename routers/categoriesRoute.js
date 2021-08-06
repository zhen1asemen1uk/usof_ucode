const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categoryController');

const authMiddleware = require('./middleware/authMiddleware');

router.get(`/`, categoryController.getAllCategories);

router.get(`/:category_id`, categoryController.getDataByCategory_ID);

router.get(`/:category_id/posts`, categoryController.getPostsByCategoriesID);

router.post(`/`, authMiddleware, categoryController.createCategory);

router.patch(`/:category_id`, authMiddleware, categoryController.updateCategoryByID);

router.delete(`/:category_id`, authMiddleware, categoryController.deleteCategoryByID);

module.exports = router;