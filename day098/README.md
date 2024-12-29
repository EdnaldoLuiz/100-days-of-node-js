# Desafio 98

Integração de Serviços com Webhooks

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web para Node.js.
- `body-parser`: Middleware para parsear JSON no Express.

### Funções Principais

- `app.post()`: Define uma rota POST para receber Webhooks.
- `bodyParser.json()`: Middleware para parsear JSON no corpo da requisição.
- `res.status().send()`: Envia uma resposta HTTP.

## Resultado

```js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
  const event = req.body;

  console.log('Evento recebido:', event);

  res.status(200).send('Evento recebido com sucesso');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
```