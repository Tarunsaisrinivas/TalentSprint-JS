const express = require('express');
const router = express.Router();
const { getUser, addUser, login } = require('../controllers/userController');

router.get('/', getUser);
router.post('/', addUser);
// for login
router.post('/login', login);

module.exports = router;