const express = require('express');
const {showhistory} = require('../controllers/historyController');

const router = express.Router();
router.get('/his', showhistory);

router.get('/his', );


module.exports = router;