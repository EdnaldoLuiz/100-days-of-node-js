const redis = require('redis');
const client = redis.createClient({
  host: 'redis',
  port: 6379
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

client.on('connect', () => {
  console.log('Conectado ao Redis');
});

const rateLimiter = (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  const windowSize = 60 * 1000;
  const maxRequests = 10;
  const key = `rateLimiter:${ip}`;

  client.multi([
    ['zadd', key, now, now],
    ['zremrangebyscore', key, 0, now - windowSize],
    ['zcard', key]
  ]).exec((err, replies) => {
    if (err) {
      return res.status(500).send('Erro no servidor');
    }
    const requestCount = replies[2];
    if (requestCount > maxRequests) {
      return res.status(429).send('Muitas requisições, tente mais tarde');
    }
    next();
  });
};

module.exports = rateLimiter;