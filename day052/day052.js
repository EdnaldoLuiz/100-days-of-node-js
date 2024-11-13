const express = require('express');
const exampleRoutes = require('./src/routes/routes');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();
app.use(express.json());
app.use('/api', exampleRoutes);
app.use(errorHandler);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});