const express = require('express');
const router = express.Router();
const fraseController = require('../controllers/manuseioFrases.js');

router.get('/random', fraseController.getRandomQuote);

module.exports = router;