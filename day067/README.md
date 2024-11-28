# Desafio 67

Validação de Dados com JOI

## Explicação

### Ferramentas Utilizadas

- `joi`: Biblioteca para validação de dados.
- `express`: Framework web rápido e minimalista para Node.js.
- `body-parser`: Middleware para analisar corpos de requisição JSON.

### Funções Principais

- `Joi.object()`: Cria um esquema de validação.
- `schema.validate()`: Valida os dados de entrada contra o esquema.

## Arquivos

### `day067.js`

```js
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
```

### `src/validation.js`

```js
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateUser = (user) => {
  return userSchema.validate(user);
};

module.exports = validateUser;
```