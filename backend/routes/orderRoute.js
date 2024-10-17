const express = require('express');
const router = express.Router();
const {createOrder, getAllOrder, getOrder, deleteOrder} = require('../controllers/orderController.js')

router.post('/order', createOrder);
router.get('/order', getAllOrder);
router.get('/order/:id', getOrder);
router.delete('/order/:id', deleteOrder);

module.exports = router