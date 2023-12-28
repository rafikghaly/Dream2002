// routes/product.js
const express = require('express');
const router = express.Router();
const {cartView, addToCart,CheckOut} = require('../controllers/cartController');

// Add routes for handling cart-related requests
router.get('/cartView', cartView);
router.post('/addToCart', addToCart);
router.post('/checkout',CheckOut);


// Add other routes for product-related requests

module.exports = router;
