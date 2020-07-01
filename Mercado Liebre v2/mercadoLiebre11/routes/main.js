const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

/* GET - home page. */
router.get('/', mainController.index);

/* GET - product detail */
router.get('/product/detail/:id/:category', mainController.detail); 

module.exports = router;
