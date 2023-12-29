//js
const express = require('express');
const {loginUser} = require('../controllers/loginController');
const router = express.Router();
// router.get('/register', registerView);
// router.get('/login', loginView);
// router.post('/login', loginUser);
router.post('/login',loginUser)

module.exports = router;