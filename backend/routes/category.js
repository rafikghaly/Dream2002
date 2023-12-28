// routes/product.js
const express = require('express');
const router = express.Router();
const {addCategory, showcategory} = require('../controllers/categoryController');

// Add routes for handling cart-related requests

router.get('/addCategory', showcategory);
router.post('/addCategory', addCategory);


// Add other routes for product-related requests
module.exports = router;