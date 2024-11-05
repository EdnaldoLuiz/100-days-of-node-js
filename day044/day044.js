const express = require('express');
const cacheRoutes = require('./routes/cacheRoutes');

const app = express();

app.use('/cache', cacheRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});