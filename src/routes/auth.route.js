const express = require('express');
const { register, login, getAllUsers } = require('../controllers/auth.controller');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/allUsers', getAllUsers);

module.exports = router;
