const express = require('express');
const { exampleAction } = require('../controllers/controller');

const router = express.Router();

router.get('/example', exampleAction);

module.exports = router;