const express = require('express');
const router = express.Router();
const {loginUser, registerUser} = require('../controllers/userController.js');


router.post('/user/login', loginUser);
router.post('/user/register', registerUser);

module.exports = router;