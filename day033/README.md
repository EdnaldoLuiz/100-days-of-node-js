# Desafio 33

Middleware de Validação no Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `express-validator`: Biblioteca para validação de dados no Express.js.

### Funções Principais

- `check()`: Cria uma cadeia de validação.
- `validationResult()`: Verifica os resultados da validação.

## Resultado

```javascript
// filepath: /c:/Users/ednal/OneDrive/Área de Trabalho/Projetos/desafios/node/day033/day033.js
const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/users', [
  check('username').isLength({ min: 3, max: 30 }).withMessage('O nome de usuário deve ter pelo menos 3 caracteres'),
  check('email').isEmail().withMessage('Deve ser um email válido'),
  check('password').isLength({ min: 6, max: 20 }).withMessage('A senha deve ter pelo menos 6 caracteres')
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
```