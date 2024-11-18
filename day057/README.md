# Desafio 57

Limitação de Taxa com Redis

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `redis`: Biblioteca para interagir com o banco de dados Redis.

### Funções Principais

- `redis.createClient()`: Cria um cliente Redis.
- `client.multi()`: Inicia uma transação Redis.
- `zadd()`: Adiciona um elemento a um conjunto ordenado.
- `zremrangebyscore()`: Remove elementos de um conjunto ordenado por pontuação.
- `zcard()`: Retorna o número de elementos em um conjunto ordenado.

## Arquivos

### `day057.js`

```js
const express = require('express');
const exampleRoutes = require('./routes/exampleRoutes');

const app = express();
app.use(express.json());
app.use('/api', exampleRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `src/middlewares/rateLimiter.js`

```js
const redis = require('redis');
const client = redis.createClient();

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowSize = 60 * 1000; // 1 minuto
  const maxRequests = 10;

  client.multi()
    .zadd('rateLimiter', now, `${ip}:${now}`)
    .zremrangebyscore('rateLimiter', 0, now - windowSize)
    .zcard('rateLimiter')
    .exec((err, replies) => {
      if (err) {
        return res.status(500).send('Erro no servidor');
      }

      const requestCount = replies[2];
      if (requestCount > maxRequests) {
        return res.status(429).send('Muitas requisições, tente novamente mais tarde');
      }

      next();
    });
};

module.exports = rateLimiter;
```

### `src/routes/route.js`

```js
const express = require('express');
const rateLimiter = require('../middlewares/rateLimiter');

const router = express.Router();

router.get('/example', rateLimiter, (req, res) => {
  res.send('Hello, this is a rate-limited endpoint!');
});

module.exports = router;
```