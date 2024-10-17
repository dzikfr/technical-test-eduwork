const express = require('express');
const router = express.Router();
const {createProduct, getAllProduct, getProduct, updateProduct, deleteProduct} = require('../controllers/productController.js');

router.post('/product', createProduct );
router.get('/product', getAllProduct);
router.get('/product/:id', getProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router;