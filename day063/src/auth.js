const jwt = require('jsonwebtoken');
const blacklist = require('./blackList');

const secretKey = '123456';

const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  if (blacklist.isBlacklisted(token)) {
    throw new Error('Token is blacklisted');
  }
  return jwt.verify(token, secretKey);
};

const blacklistToken = (token) => {
  blacklist.add(token);
};

module.exports = {
  generateToken,
  verifyToken,
  blacklistToken,
};