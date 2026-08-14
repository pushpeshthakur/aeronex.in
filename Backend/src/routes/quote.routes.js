const express = require('express');
const quoteController = require('../controllers/quote.controller');


const router = express.Router();

router.post('/upload', quoteController.createQuote);


module.exports = router;

