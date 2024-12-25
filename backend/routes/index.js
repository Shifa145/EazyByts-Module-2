// routes/index.js

const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const stockRoutes = require('./stockRoutes');

router.use('/auth', authRoutes);
router.use('/stocks', stockRoutes);

module.exports = router;
