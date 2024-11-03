const express = require('express');
const app = express();
const port = 3000;

app.get('/error', (req, res, next) => {
  const err = new Error('Algo deu errado!');
  err.status = 500;
  next(err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

app.get('/', (req, res) => {
  res.send('Bem-vindo à API com tratamento global de erros!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});