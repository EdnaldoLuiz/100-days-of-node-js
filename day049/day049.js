const express = require('express');
const userRoutes = require('./src/routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});