const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const itemRoutes = require('./routes/itemRoutes');

mongoose.connect('mongodb://localhost:27017/day015', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

app.use(express.json());
app.use('/api', itemRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});