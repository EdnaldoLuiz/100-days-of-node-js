require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const authRouter = require('./routes/authRoutes');

app.use(express.json());
app.use('/api', authRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});