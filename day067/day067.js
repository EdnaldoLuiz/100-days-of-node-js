const express = require('express');
const bodyParser = require('body-parser');
const validateUser = require('./validation');

const app = express();
app.use(bodyParser.json());

app.post('/register', (req, res) => {
  const { error } = validateUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  res.status(200).json({ message: 'User registered successfully' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});