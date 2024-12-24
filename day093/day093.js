const express = require('express');
const { requestTime, logRequest } = require('./plugins/plugin');

const app = express();
const PORT = 3000;

app.use(requestTime);
app.use(logRequest);

app.get('/', (req, res) => {
  res.send(`Hello, Express! Request time: ${new Date(req.requestTime).toISOString()}`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});