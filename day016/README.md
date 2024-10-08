# Desafio 16

Middleware de Tratamento de Erros no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.use()`: Adiciona middleware à aplicação.
- `app.get()`: Define uma rota GET.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Arquivos

### `day016.js`

```js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocorreu um erro no servidor!' });
};

module.exports = errorHandler;
```

### `middlewares/errorHandler.js`

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Ocorreu um erro no servidor!' });
};

module.exports = errorHandler;
```

### `routes/exampleRoutes.js`

````js
const express = require('express');
const router = express.Router();

router.get('/error', (req, res) => {
  throw new Error('Erro intencional para teste');
});

router.get('/success', (req, res) => {
  res.send('Rota de sucesso!');
});

module.exports = router;
```