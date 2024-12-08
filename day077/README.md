# Desafio 77

Revogação de JWT

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `jsonwebtoken`: Biblioteca para criação e verificação de JWT.
- `body-parser`: Middleware para parsing de requisições JSON.

### Funções Principais

- `generateToken()`: Gera um token JWT.
- `revokeToken()`: Revoga um token JWT.
- `isTokenRevoked()`: Verifica se um token foi revogado.
- `verifyToken()`: Verifica um token JWT.

## Resultado

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = '123456';
const revokedTokens = new Set();

app.use(bodyParser.json());

function generateToken(username) {
  return jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
}

function revokeToken(token) {
  revokedTokens.add(token);
}

function isTokenRevoked(token) {
  return revokedTokens.has(token);
}

function verifyToken(token, callback) {
  jwt.verify(token, SECRET_KEY, callback);
}

app.post('/login', (req, res) => {
  const { username } = req.body;
  const token = generateToken(username);
  res.json({ token });
});

app.post('/revoke', (req, res) => {
  const { token } = req.body;
  revokeToken(token);
  res.json({ message: 'Token Revogado' });
});

app.get('/protected', (req, res) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Nenhum Token' });
  }

  if (isTokenRevoked(token)) {
    return res.status(401).json({ message: 'Token revogado' });
  }

  verifyToken(token, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Falha ao Autenticar' });
    }
    res.json({ message: 'Dado Protegido', user: decoded });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```