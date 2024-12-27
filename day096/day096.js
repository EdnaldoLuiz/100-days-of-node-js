const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, PM2 e New Relic!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});