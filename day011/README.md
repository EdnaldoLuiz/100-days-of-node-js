# Desafio 11

Servindo Arquivos Estáticos com Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `express.static()`: Middleware para servir arquivos estáticos.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.use()`: Adiciona middleware à aplicação.
- `express.static()`: Middleware para servir arquivos estáticos.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Resultado

### `day011.js`

```js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```