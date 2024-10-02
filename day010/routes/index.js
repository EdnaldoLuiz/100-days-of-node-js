const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const submitController = require('../controllers/submitController');

const route = {
    home: '/',
    submit: '/submit'
}

router.get(route.home, homeController.homePage);
router.post(route.submit, submitController.submitData);

module.exports = { router, route };