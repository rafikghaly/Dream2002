
const express = require('express');
const {showProductByName} = require('../controllers/clientProductController');
const router = express.Router();
console.log('ana fi route');
router.get('/showProductByName', showProductByName);

module.exports = router;