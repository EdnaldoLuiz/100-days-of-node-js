const redis = require('redis');

const redisClient = redis.createClient();
const redisPublisher = redis.createClient();

redisClient.on('error', (err) => {
  console.error('Erro no Redis Client:', err);
});

redisPublisher.on('error', (err) => {
  console.error('Erro no Redis Publisher:', err);
});

module.exports = { redisClient, redisPublisher };