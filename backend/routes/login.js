//js
const express = require('express');
const {registerView, loginView, loginUser} = require('../controllers/loginController');
const router = express.Router();
router.get('/register', registerView);
router.get('/login', loginView);
router.post('/login', loginUser);

module.exports = router;