
const express = require('express');
const {showProductByName} = require('../controllers/clientProductController');
const router = express.Router();
router.get('/showProductByName', showProductByName);

module.exports = router;