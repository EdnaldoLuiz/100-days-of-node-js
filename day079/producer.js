const amqp = require('amqplib/callback_api');
const { throwError } = require('./utils');

const QUEUE = 'simple_queue';

amqp.connect('amqp://localhost', (err, connection) => {
  throwError(err);
  connection.createChannel((err, channel) => {
    throwError(err);
    channel.assertQueue(QUEUE, { durable: false });
    const message = 'Hello, RabbitMQ!';
    channel.sendToQueue(QUEUE, Buffer.from(message));
    console.log(`Mensagem enviada: ${message}`);
  });

  setTimeout(() => {
    connection.close();
    process.exit(0);
  }, 500);
});