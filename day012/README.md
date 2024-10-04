# Desafio 12

Parâmetros de Consulta (Query Parameters) com Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `app.get()`: Define uma rota GET.
- `req.query`: Acessa os parâmetros de consulta da solicitação.
- `app.listen()`: Faz a aplicação Express ouvir em uma porta específica.

## Resultado

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/search', (req, res) => {
  const { query } = req;
  res.send(`<h1>Parâmetros de Consulta Recebidos</h1><pre>${JSON.stringify(query, null, 2)}</pre>`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
  console.log('Utilize a rota http://localhost:3000/search?nome=seu_nome&idade=sua_idade para testar');
});
```