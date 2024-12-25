// utils/generateJWT.js

const crypto = require('crypto');

const generateJWTSecret = () => {
  return crypto.randomBytes(32).toString('hex');
};

console.log('Generated JWT Secret Key:', generateJWTSecret());
