// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // Import JWT
const { signup, login } = require('../controllers/userController');

// Middleware for verifying JWT
const { verifyToken } = require('../middlewares/authMiddleware');

// Route to handle user signup
router.post('/signup', signup);

// Route to handle user login
router.post('/login', login);

module.exports = router;
