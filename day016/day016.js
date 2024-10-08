const express = require('express');
const app = express();
const port = 3000;
const exampleRoutes = require('./routes/exampleRoutes');
const errorHandler = require('./middlewares/errorHandler');

app.use(express.json());
app.use('/api', exampleRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});