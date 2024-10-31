# Desafio 39

Paginação em API com Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `req.query`: Acessa os parâmetros de consulta na URL.
- `Array.slice()`: Extrai uma parte de um array.

## Resultado

```js
const express = require('express');
const app = express();
const port = 3000;

const data = Array.from(
    { length: 100 },
    (_, i) => ({
        id: i + 1,
        name: `Item ${i + 1}`
    }));

app.get('/api/items', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = data.slice(startIndex, endIndex);

    res.json({
        page,
        limit,
        totalItems: data.length,
        totalPages: Math.ceil(data.length / limit),
        items: results,
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
```