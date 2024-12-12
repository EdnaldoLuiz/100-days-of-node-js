# Desafio 81

Configuração de Middleware Personalizado no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.

### Funções Principais

- `app.use()`: Adiciona um middleware à aplicação Express.
- `next()`: Passa o controle para o próximo middleware.

## Arquivos

### `day081.js`

```js
const express = require('express');
const requestLogger = require('./middleware');

const app = express();
const PORT = 3000;

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

### `middleware/middleware.js`

```js
function requestLogger(req, res, next) {
  const { method, url } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url}`);
  next();
}

module.exports = requestLogger;
```