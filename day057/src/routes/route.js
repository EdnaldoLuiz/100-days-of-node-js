const express = require('express');
const rateLimiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/example', rateLimiter, (req, res) => {
  res.send('Hello, this is a rate-limited endpoint!');
});

module.exports = router;