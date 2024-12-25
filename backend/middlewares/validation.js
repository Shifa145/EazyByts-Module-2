// middlewares/validation.js

const { body, validationResult } = require('express-validator');

const validateSignUp = [
  body('username').isLength({ min: 3 }),
  body('password').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateSignUp };
