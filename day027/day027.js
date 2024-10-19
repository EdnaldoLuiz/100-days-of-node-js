const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});