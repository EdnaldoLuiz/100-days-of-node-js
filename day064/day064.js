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