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