# Desafio 30

Servidor GraphQL Básico com Apollo Server e GraphQL

## Explicação

### Ferramentas Utilizadas

- `apollo-server`: Biblioteca para criar um servidor GraphQL.
- `graphql`: Biblioteca para definir esquemas e resolver consultas GraphQL.

### Funções Principais

- `ApolloServer()`: Cria uma instância do servidor Apollo.
- `gql`: Define esquemas GraphQL.

## Resultado

```js
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Olá, mundo!',
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Servidor GraphQL rodando em ${url}`);
});
```