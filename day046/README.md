# Desafio 46

Subscrições GraphQL com Apollo Server e GraphQL

## Explicação

### Ferramentas Utilizadas

- `apollo-server`: Biblioteca para criar um servidor GraphQL.
- `graphql`: Biblioteca para trabalhar com GraphQL.

### Funções Principais

- `ApolloServer`: Cria uma instância do servidor Apollo.
- `pubsub.publish()`: Publica um evento para as subscrições.
- `pubsub.asyncIterator()`: Cria um iterador assíncrono para as subscrições.

## Arquivos

### `day046.js`

```js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const { resolvers } = require('./graphql/resolvers');
const { sendMessage } = require('./graphql/subscriptions');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/subscriptions',
    onConnect: () => console.log('Cliente conectado para subscrições'),
  },
});

server.listen().then(({ url, subscriptionsUrl }) => {
  console.log(`Servidor rodando em ${url}`);
  console.log(`Subscrições disponíveis em ${url}subscriptions`);

  setInterval(() => {
    sendMessage({ id: Date.now().toString(), content: 'Mensagem de exemplo' });
  }, 5000);
});
```

### `graphql/resolvers.js`

```js
const { PubSub } = require('graphql-subscriptions');
const pubsub = new PubSub();

const MESSAGE_SENT = 'MESSAGE_SENT';

const resolvers = {
  Query: {
    _: () => true,
  },
  Subscription: {
    messageSent: {
      subscribe: () => pubsub.asyncIterator([MESSAGE_SENT]),
    },
  },
};

module.exports = { resolvers, pubsub, MESSAGE_SENT };
```

### `graphql/schema.js`

```js
const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    _: Boolean
  }

  type Subscription {
    messageSent: Message
  }

  type Message {
    id: ID!
    content: String!
  }
`;

module.exports = typeDefs;
```

### `graphql/subscriptions.js`

```js
const { pubsub, MESSAGE_SENT } = require('./resolvers');

const sendMessage = (message) => {
  pubsub.publish(MESSAGE_SENT, { messageSent: message });
};

module.exports = { sendMessage };
```