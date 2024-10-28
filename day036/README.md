# Desafio 36

Limitação de Taxa no Express.js com `express-rate-limit`

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `express-rate-limit`: Middleware para limitar a taxa de requisições.

### Funções Principais

- `rateLimit()`: Cria um middleware de limitação de taxa.

## Resultado

```javascript
const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;
const fifteenMinutes = 15 * 60 * 1000;

const limiter = rateLimit({
  windowMs: fifteenMinutes,
  max: 100,
  message: 'Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API com limitação de taxa!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```