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