// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/jwt');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
