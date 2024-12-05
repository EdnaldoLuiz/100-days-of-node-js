const seneca = require('seneca')().use('seneca-transport');

seneca.client({ type: 'http', port: 10101, pin: 'role:math' });

seneca.act({ role: 'math', cmd: 'sum', left: 1, right: 2 }, (err, result) => {
  if (err) return console.error(err);
  console.log('Resultado da soma:', result.answer);
});