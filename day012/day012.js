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