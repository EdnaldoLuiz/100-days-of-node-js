const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();
const port = 3000;
const fifteenMinutes = 15 * 60 * 1000;

const limiter = rateLimit({
  windowMs: fifteenMinutes,
  max: 100, 
  message: 'Muitas requisições feitas a partir deste IP, por favor tente novamente mais tarde.'
});

app.use(limiter);

app.get('/', (req, res) => {
  res.send('Bem-vindo à API com limitação de taxa!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});