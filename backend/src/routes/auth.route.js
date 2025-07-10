const express = require('express');
const router = express.Router();
const { signup, login, logout, updateProfile, checkAuth} = require('../controllers/auth.controller');
const {protectRoute} = require('../middleware/auth.middleware');

router.post('/signup', signup)
router.post('/login', login);
router.get('/logout', logout);
router.put('/update-profile', protectRoute, updateProfile);
router.get('/check', protectRoute, checkAuth);

module.exports = router;

