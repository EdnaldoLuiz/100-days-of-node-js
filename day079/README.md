# Desafio 79

Fila simples com RabbitMQ

## Explicação

### Ferramentas Utilizadas

- `amqplib`: Biblioteca para comunicação com RabbitMQ no Node.js.

### Funções Principais

- `amqp.connect()`: Conecta ao servidor RabbitMQ.
- `connection.createChannel()`: Cria um canal de comunicação.
- `channel.assertQueue()`: Declara uma fila.
- `channel.sendToQueue()`: Envia uma mensagem para a fila.
- `channel.consume()`: Consome mensagens da fila.

## Arquivos

### `utils.js`

```js
function throwError(err) {
  if (err) {
    throw err;
  }
}

module.exports = { throwError };
```

### `producer.js`

```js
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
```

### `consumer.js`

```js
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
```