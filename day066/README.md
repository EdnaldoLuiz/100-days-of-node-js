# Desafio 66

Melhores Práticas com JWT

## Explicação

### Ferramentas Utilizadas

- `jsonwebtoken`: Biblioteca para criação e verificação de tokens JWT.
- `express`: Framework web rápido e minimalista para Node.js.
- `body-parser`: Middleware para analisar corpos de requisição JSON.

### Funções Principais

- `jwt.sign()`: Gera um token JWT.
- `jwt.verify()`: Verifica um token JWT.
- `generateToken()`: Gera um token JWT com tempo de expiração curto.
- `generateRefreshToken()`: Gera um token de atualização com tempo de expiração longo.
- `renewToken()`: Renova um token JWT usando um token de atualização.

## Arquivos


### `day066.js`

```js
const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, generateRefreshToken, verifyToken, renewToken } = require('./auth');

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
```

### `src/auth.js`

```js
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
```