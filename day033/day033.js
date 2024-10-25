const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/users', [
  check('username').isLength({ min: 3, max: 30 }).withMessage('O nome de usuário deve ter pelo menos 3 caracteres'),
  check('email').isEmail().withMessage('Deve ser um email válido'),
  check('password').isLength({ min: 6, max: 20}).withMessage('A senha deve ter pelo menos 6 caracteres')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.send('Usuário criado com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});