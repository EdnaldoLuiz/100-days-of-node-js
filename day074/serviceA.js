const seneca = require('seneca')().use('seneca-transport');

seneca.add({ role: 'math', cmd: 'sum' }, (msg, reply) => {
  reply(null, { answer: msg.left + msg.right });
});

seneca.listen({ type: 'http', port: 10101, pin: 'role:math' });