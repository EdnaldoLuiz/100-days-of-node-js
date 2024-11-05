const express = require('express');
const router = express.Router();
const { setCache, getCache, delCache } = require('../controllers/cacheController');

router.get('/set', setCache);
router.get('/get', getCache);
router.get('/del', delCache);

module.exports = router;