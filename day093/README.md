# Desafio 93

Criação de Plugins no Express

## Explicação

Utilizamos o Express.js para criar um servidor web e implementamos plugins (middlewares) personalizados para adicionar funcionalidades.

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.

### Funções Principais

- `app.use()`: Adiciona um middleware à aplicação Express.
- `next()`: Passa o controle para o próximo middleware.

## Arquivos

### `day093.js`

```js
const express = require('express');
const { requestTime, logRequest } = require('./plugin');

const app = express();
const PORT = 3000;

app.use(requestTime);
app.use(logRequest);

app.get('/', (req, res) => {
  res.send(`Hello, Express! Request time: ${new Date(req.requestTime).toISOString()}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```

### `plugins/plugin.js`

```js
function requestTime(req, res, next) {
  req.requestTime = Date.now();
  next();
}

function logRequest(req, res, next) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}

module.exports = {
  requestTime,
  logRequest
};
```