# Desafio 27

Roteador do Express.js

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.

### Funções Principais

- `express.Router()`: Cria um roteador modular e montável.
- `router.get()`, `router.post()`, `router.put()`, `router.delete()`: Define rotas para o roteador.

## Arquivos

### `day027.js`

```js
const express = require('express');
const app = express();
const port = 3000;
const userRouter = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `routes/userRoutes.js`

```js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Obter todos os usuários');
});

router.post('/', (req, res) => {
  res.send('Criar um novo usuário');
});

router.put('/:id', (req, res) => {
  res.send(`Atualizar o usuário com ID ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
  res.send(`Deletar o usuário com ID ${req.params.id}`);
});

module.exports = router;
```
