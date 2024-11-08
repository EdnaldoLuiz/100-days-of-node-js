# Desafio 47

WebSockets com Redis utilizando Socket.IO e Redis

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `socket.io`: Biblioteca para adicionar suporte a WebSockets em aplicações Node.js.
- `redis`: Biblioteca para interagir com o banco de dados Redis.

### Funções Principais

- `socket.on('message')`: Escuta mensagens enviadas pelo cliente.
- `redisPublisher.publish()`: Publica uma mensagem no canal Redis.
- `redisClient.subscribe()`: Subscreve a um canal Redis para receber mensagens.

## Arquivos

### `day047.js`

```js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const { handleMessage } = require('./controllers/messageController');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');
  handleMessage(socket);

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const port = 8000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```

### `controllers/messageController.js`

```js
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
```

### `service/redisService.js`

```js
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
```