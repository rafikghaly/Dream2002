
const express = require('express');
const {addProductView, removeProductView,  addProduct} = require('../controllers/adminProductController');
const router = express.Router();
router.get('/addProduct', addProductView);
router.get('/removeProduct', removeProductView);
router.post('/addProduct', addProduct);

module.exports = router;