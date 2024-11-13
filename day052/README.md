# Desafio 52

Registro de Erros com Winston

## Explicação

### Ferramentas Utilizadas

- express: Framework web rápido e minimalista para Node.js.
- winston: Biblioteca para registro de logs no Node.js.

### Funções Principais

- createLogger(): Cria uma instância do logger.
- logger.error(): Registra uma mensagem de erro.
- transports.File(): Define um transporte para salvar logs em arquivos.
- transports.Console(): Define um transporte para exibir logs no console.

## Arquivos

### `day053.js`

```js
const express = require('express');
const exampleRoutes = require('./routes/exampleRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/api', exampleRoutes);
app.use(errorHandler);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `src/services/logger.js`

```js
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.errors({ stack: true }),
    format.splat(),
    format.json()
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

module.exports = logger;
```

### `src/controllers/controller.js`

```js
const logger = require('../services/logger');

const exampleAction = (req, res) => {
  try {
    throw new Error('Algo deu errado!');
  } catch (error) {
    logger.error('Erro no exampleAction: %o', error);
    res.status(500).send('Erro interno do servidor');
  }
};

module.exports = { exampleAction };
```

### `src/middlewares/errorHandler.js`

```js
const logger = require('../services/logger');

const errorHandler = (err, req, res, next) => {
  logger.error('Erro no middleware: %o', err);
  res.status(500).send('Erro interno do servidor');
};

module.exports = errorHandler;
```

### `src/routes/routes.js`

```js
const express = require('express');
const { exampleAction } = require('../controllers/exampleController');

const router = express.Router();

router.get('/example', exampleAction);

module.exports = router;
```