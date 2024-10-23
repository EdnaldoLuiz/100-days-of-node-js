# Desafio 31

Lidando com CORS no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `cors`: Biblioteca para habilitar CORS no Express.js.

### Funções Principais

- `cors()`: Middleware para habilitar CORS.

## Resultado

```js
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Dados acessados com sucesso!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```