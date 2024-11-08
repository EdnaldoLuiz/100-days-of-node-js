const { redisClient, redisPublisher } = require('../service/redisService');

const handleMessage = (socket) => {
  socket.on('message', (message) => {
    console.log('Mensagem recebida:', message);
    redisPublisher.publish('chat', JSON.stringify(message));
  });

  redisClient.subscribe('chat');
  redisClient.on('message', (channel, message) => {
    if (channel === 'chat') {
      socket.emit('message', JSON.parse(message));
    }
  });
};

module.exports = { handleMessage };