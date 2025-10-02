
const express = require('express');
const { generateSecret, guessWord } = require('../controllers/wordController');

const router = express.Router();

router.get('/secret', generateSecret)
router.post("/guess", guessWord);

module.exports = router;