const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, verifyToken, blacklistToken } = require('./src/auth');

const app = express();
app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const user = req.body;
  const token = generateToken(user);
  res.json({ token });
});

app.post('/logout', (req, res) => {
  const token = req.body.token;
  blacklistToken(token);
  res.sendStatus(200);
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