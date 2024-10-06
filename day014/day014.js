const express = require('express');
const app = express();
const port = 3000;
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});