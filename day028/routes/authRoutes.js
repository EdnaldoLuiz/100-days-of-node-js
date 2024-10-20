require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

function authenticateJWT(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Token não fornecido');
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).send('Token inválido');
    }
    req.user = user;
    next();
  });
}

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username !== 'user' || password !== 'password') {
    return res.status(401).send('Credenciais inválidas');
  }

  const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
  res.json({ token });
});

router.get('/protected', authenticateJWT, (req, res) => {
  res.send('Você acessou uma rota protegida!');
});

module.exports = router;