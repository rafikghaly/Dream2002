const express = require('express');
const {ClientinfoView,clientupdate} = require('../controllers/clientinfoController');
const router = express.Router();

router.get('/clientinfo', ClientinfoView);
router.post('/clientinfo', clientupdate);

module.exports = router;