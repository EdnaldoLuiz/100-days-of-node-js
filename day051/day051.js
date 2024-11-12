const express = require('express');
const webhookRoutes = require('./src/routes/webhookRoutes');

const app = express();
app.use(express.json());
app.use('/api', webhookRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});