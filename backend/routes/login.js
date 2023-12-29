//js
const express = require('express');
const {registerView, loginView, loginUser, logout} = require('../controllers/loginController');
const router = express.Router();
router.get('/register', registerView);
router.get('/login', loginView);
router.post('/login', loginUser);
router.get('/login',logout);
module.exports = router;