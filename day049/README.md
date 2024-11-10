# Desafio 49

Utilizando Prisma para ORM

## Explicação

### Ferramentas Utilizadas

- express: Framework web rápido e minimalista para Node.js.
- prisma: ORM para Node.js e TypeScript.
- sqlite: Banco de dados leve e autônomo.

### Funções Principais

- prisma.user.findMany(): Retorna todos os usuários.
- prisma.user.create(): Cria um novo usuário.

## Arquivos

### `src/server.js`

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
```

### `prisma/schema.prisma`

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"
}

model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

### `src/controllers/userController.js`

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  const user = await prisma.user.create({
    data: { name, email },
  });
  res.status(201).json(user);
};

module.exports = { getUsers, addUser };
```

### `src/routes/userRoutes.js`

```js
const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.post('/users', addUser);

module.exports = router;
```

### `src/services/prismaService.js`

```js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = prisma;
```