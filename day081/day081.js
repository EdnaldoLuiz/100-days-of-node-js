const express = require('express');
const requestLogger = require('./middleware/middleware');

const app = express();
const PORT = 3000;

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});