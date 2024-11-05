# Desafio 44

Implementação de Cache no Node.js com `node-cache`

## Explicação

### Ferramentas Utilizadas

- `node-cache`: Biblioteca para implementar cache em memória no Node.js.

### Funções Principais

- `myCache.set()`: Armazena um valor no cache.
- `myCache.get()`: Recupera um valor do cache.
- `myCache.del()`: Remove um valor do cache.

## Arquivos

### `day044.js`

```js
const express = require('express');
const cacheRoutes = require('./routes/cacheRoutes');

const app = express();

app.use('/cache', cacheRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `src/controllers/cacheController.js`

```js
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 });

const setCache = (req, res) => {
  const key = req.query.key;
  const value = req.query.value;
  if (key && value) {
    myCache.set(key, value);
    res.send(`Chave ${key} com valor ${value} armazenada no cache.`);
  } else {
    res.status(400).send('Chave e valor são obrigatórios.');
  }
};

const getCache = (req, res) => {
  const key = req.query.key;
  if (key) {
    const value = myCache.get(key);
    if (value) {
      res.send(`Valor para a chave ${key}: ${value}`);
    } else {
      res.status(404).send('Chave não encontrada no cache.');
    }
  } else {
    res.status(400).send('Chave é obrigatória.');
  }
};

const delCache = (req, res) => {
  const key = req.query.key;
  if (key) {
    myCache.del(key);
    res.send(`Chave ${key} removida do cache.`);
  } else {
    res.status(400).send('Chave é obrigatória.');
  }
};

module.exports = { setCache, getCache, delCache };
```

### `routes/cacheRoutes.js`

```js
const express = require('express');
const router = express.Router();
const { setCache, getCache, delCache } = require('../controllers/cacheController');

router.get('/set', setCache);
router.get('/get', getCache);
router.get('/del', delCache);

module.exports = router;
```