# Desafio 48

Testes de Integração com Supertest

## Explicação

### Ferramentas Utilizadas

- express: Framework web rápido e minimalista para Node.js.
- supertest: Biblioteca para testar APIs HTTP.
- jest: Framework de testes para JavaScript.

### Funções Principais

- request(app).get(): Faz uma requisição GET para a API.
- request(app).post(): Faz uma requisição POST para a API.
- expect(): Função de asserção para verificar os resultados dos testes.

## Arquivos

### `day047.js`

```js
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(express.json());
app.use('/api', userRoutes);

const port = 8000;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

module.exports = app;
```

### `controllers/userController.js`

```js
const users = [];

const getUsers = (req, res) => {
  res.status(200).json(users);
};

const addUser = (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).json(user);
};

module.exports = { getUsers, addUser };
```

### `routes/userRoutes.js`

```js
const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', addUser);

module.exports = router;
```

### `tests/user.test.js`

```js
const request = require('supertest');
const app = require('./day048.js');

describe('Testes de Integração para a API de Usuários', () => {
  it('Deve retornar a lista de usuários', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('Deve adicionar um novo usuário', async () => {
    const newUser = { name: 'John Doe', email: 'john@example.com' };
    const res = await request(app).post('/api/users').send(newUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(newUser);
  });
});
```