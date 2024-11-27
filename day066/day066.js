const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, generateRefreshToken, verifyToken, renewToken } = require('./src/auth');

const app = express();
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const user = req.body;
  const token = generateToken(user);
  const refreshToken = generateRefreshToken(user);
  res.json({ token, refreshToken });
});

app.post('/renew', (req, res) => {
  const { refreshToken } = req.body;
  try {
    const newToken = renewToken(refreshToken);
    res.json({ token: newToken });
  } catch (err) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  try {
    const decoded = verifyToken(token);
    res.json({ message: 'Protected content', user: decoded });
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});