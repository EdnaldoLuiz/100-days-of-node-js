const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.get('/protected', authMiddleware.authenticateJWT, authController.protected);

module.exports = router;