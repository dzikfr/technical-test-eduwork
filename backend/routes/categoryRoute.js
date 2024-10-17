const express = require('express');
const router = express.Router();
const { createCategory, getAllCategory, getCategory, deleteCategory} = require('../controllers/categoryController.js');

router.post('/category', createCategory);
router.get('/category', getAllCategory);
router.get('/category/:id', getCategory);
router.delete('/category/:id', deleteCategory);

exports.module = router;