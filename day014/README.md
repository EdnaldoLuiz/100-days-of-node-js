# Desafio 14

Autenticação com JSON Web Tokens (JWT) usando a biblioteca `jsonwebtoken`

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `jsonwebtoken`: Biblioteca para criar e verificar tokens JWT.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.post()`: Define uma rota POST.
- `app.get()`: Define uma rota GET.
- `jwt.sign()`: Cria um token JWT.
- `jwt.verify()`: Verifica um token JWT.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Arquivos

### `day014.js`

```js
const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `controllers/authController.js`

```javascript
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'segredo';

exports.login = (req, res) => {
  const { username, password } = req.body;

  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Credenciais inválidas');
  }
};

exports.protected = (req, res) => {
  res.send('Você acessou uma rota protegida!');
};
```

### `middlewares/authMiddleware.js`

```js
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY || 'segredo';

exports.authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).send('Token inválido');
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).send('Token não fornecido');
  }
};
```

### `routes/authRoutes.js`

```js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', authController.login);
router.get('/protected', authMiddleware.authenticateJWT, authController.protected);

module.exports = router;
```