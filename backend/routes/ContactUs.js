const express = require('express');
// const {ContactUsView, ContactUsUpdate} = require('../controllers/contactUsController');
const{ContactUsView,ContactUsUpdate}= require("../controllers/contactUsController")
const router = express.Router();

router.get('/contactUs', ContactUsView);
router.post('/contactUs', ContactUsUpdate);

module.exports = router;