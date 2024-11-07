const { pubsub, MESSAGE_SENT } = require('./resolvers');

const sendMessage = (message) => {
  pubsub.publish(MESSAGE_SENT, { messageSent: message });
};

module.exports = { sendMessage };