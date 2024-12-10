const amqp = require('amqplib/callback_api');
const { throwError } = require('./utils');

const QUEUE = 'simple_queue';

amqp.connect('amqp://localhost', (err, connection) => {
  throwError(err);
  connection.createChannel((err, channel) => {
    throwError(err);
    channel.assertQueue(QUEUE, { durable: false });
    console.log(`Aguardando mensagens na fila: ${QUEUE}`);
    channel.consume(QUEUE, (msg) => {
      console.log(`Mensagem recebida: ${msg.content.toString()}`);
    }, { noAck: true });
  });
});