# Desafio 64

Middleware GraphQL com Apollo Server

## Explicação

### Ferramentas Utilizadas

- `apollo-server-express`: Biblioteca para integrar Apollo Server com Express.
- `graphql`: Biblioteca para criar esquemas GraphQL.
- `jsonwebtoken`: Biblioteca para criação e verificação de tokens JWT.
- `express`: Framework web rápido e minimalista para Node.js.
- `body-parser`: Middleware para analisar corpos de requisição JSON.

### Funções Principais

- `ApolloServer`: Cria um servidor GraphQL.
- `server.applyMiddleware()`: Aplica o middleware do Apollo Server ao aplicativo Express.
- `jwt.verify()`: Verifica um token JWT.

## Arquivos

### `day064.js`

````js
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const bodyParser = require('body-parser');
const { typeDefs, resolvers } = require('./model/schema');
const authMiddleware = require('./middleware/authMiddleware');

const startServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(authMiddleware);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
      return { user: req.user };
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  const port = 4000;
  app.listen(port, () => {
    console.log(`Servidor GraphQL rodando em http://localhost:${port}${server.graphqlPath}`);
  });
};

startServer();
```

### `middleware/authMiddleware.js`

```js
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key';

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authMiddleware;
```

### `model/schema.js`

```js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    user: User
  }

  type User {
    id: ID
    name: String
    email: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    user: (parent, args, context) => {
      if (!context.user) {
        throw new Error('Not authenticated');
      }
      return context.user;
    },
  },
};

module.exports = { typeDefs, resolvers };
```