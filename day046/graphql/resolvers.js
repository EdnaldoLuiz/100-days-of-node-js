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