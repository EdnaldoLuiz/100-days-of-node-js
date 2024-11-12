# Desafio 51

Webhooks no Node.js com Express.js

## Explicação

### Ferramentas Utilizadas

- express: Framework web rápido e minimalista para Node.js.

### Funções Principais

- router.post('/webhook', handleWebhook): Define uma rota POST para receber webhooks.
- handleWebhook(req, res): Função para processar o evento recebido pelo webhook.

## Arquivos

### `day051.js`

```js
const express = require('express');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();
app.use(express.json());
app.use('/api', webhookRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `src/controllers/webhookController.js`

```js
const handleWebhook = (req, res) => {
  const event = req.body;

  console.log('Evento recebido:', event);

  res.status(200).send('Evento recebido com sucesso');
};

module.exports = { handleWebhook };
```

### `src/routes/webhookRoutes.js`

```js
const express = require('express');
const { handleWebhook } = require('../controllers/webhookController');

const router = express.Router();

router.post('/webhook', handleWebhook);

module.exports = router;
```