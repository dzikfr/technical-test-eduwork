const express = require('express');
const router = express.Router();
const {createCategory, getAllCategory, getCategory, deleteCategory, updateCategory} = require('../controllers/categoryController.js');

router.post('/category', createCategory);
router.get('/category', getAllCategory);
router.get('/category/:id', getCategory);
router.put('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router