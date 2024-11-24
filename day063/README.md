# Desafio 63

Lista Negra de JWT

## Explicação

### Ferramentas Utilizadas

- `jsonwebtoken`: Biblioteca para criação e verificação de tokens JWT.
- `express`: Framework web rápido e minimalista para Node.js.
- `body-parser`: Middleware para analisar corpos de requisição JSON.

### Funções Principais

- `jwt.sign()`: Gera um token JWT.
- `jwt.verify()`: Verifica um token JWT.
- `blacklist.add()`: Adiciona um token à lista negra.
- `blacklist.isBlacklisted()`: Verifica se um token está na lista negra.

## Arquivos

### `day063.js`

```js
const express = require('express');
const bodyParser = require('body-parser');
const { generateToken, verifyToken, blacklistToken } = require('./auth');

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
```

### `blackList.js`

```js
const blacklist = new Set();

const add = (token) => {
  blacklist.add(token);
};

const isBlacklisted = (token) => {
  return blacklist.has(token);
};

module.exports = {
  add,
  isBlacklisted,
};
```

### `src/auth.js`

```js
const jwt = require('jsonwebtoken');
const blacklist = require('./blacklist');

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
```