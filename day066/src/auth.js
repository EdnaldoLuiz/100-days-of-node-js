const jwt = require('jsonwebtoken');

const secretKey = '123456';
const refreshTokens = new Set();

const generateToken = (user) => {
  return jwt.sign(user, secretKey, { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
  const refreshToken = jwt.sign(user, secretKey, { expiresIn: '7d' });
  refreshTokens.add(refreshToken);
  return refreshToken;
};

const verifyToken = (token) => {
  return jwt.verify(token, secretKey);
};

const renewToken = (refreshToken) => {
  if (!refreshTokens.has(refreshToken)) {
    throw new Error('Invalid refresh token');
  }
  const user = jwt.verify(refreshToken, secretKey);
  const newToken = generateToken(user);
  return newToken;
};

module.exports = {
  generateToken,
  generateRefreshToken,
  verifyToken,
  renewToken,
};