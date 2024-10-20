# Desafio 28

Middleware de Autorização com JWT no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `jsonwebtoken`: Biblioteca para criar e verificar tokens JWT.
- `dotenv`: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`.

### Funções Principais

- `jwt.sign()`: Cria um token JWT.
- `jwt.verify()`: Verifica um token JWT.
- `express.Router()`: Cria um roteador modular e montável.
- `router.use()`: Adiciona middleware ao roteador.

## Arquivos

### `day028.js`

```js
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const authRouter = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `routes/authRoutes.js`

```js
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
```