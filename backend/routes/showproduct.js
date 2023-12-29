const express = require('express');
const {productView} = require('../controllers/showproductController');
const router = express.Router();
router.post('/showproductbycategory', productView);
//router.get('/showproductbycategory',prod);
module.exports = router;