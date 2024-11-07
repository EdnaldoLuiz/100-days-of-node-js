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

  // Enviar uma mensagem de exemplo a cada 5 segundos
  setInterval(() => {
    sendMessage({ id: Date.now().toString(), content: 'Mensagem de exemplo' });
  }, 5000);
});