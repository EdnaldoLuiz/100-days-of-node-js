const express = require('express');
const exampleRoutes = require('./src/routes/route');

const app = express();
app.use(express.json());
app.use('/api', exampleRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});