# Desafio 68

Usando WebSockets com Express

## Explicação

### Ferramentas Utilizadas

- `express`: Framework web rápido e minimalista para Node.js.
- `socket.io`: Biblioteca para adicionar suporte a WebSockets em aplicações Node.js.

### Funções Principais

- `express()`: Cria uma aplicação Express.
- `http.createServer()`: Cria um servidor HTTP.
- `socketIo()`: Inicializa o servidor Socket.IO.
- `io.on('connection')`: Lida com novas conexões WebSocket.
- `socket.on('message')`: Lida com mensagens recebidas dos clientes.
- `io.emit('message')`: Envia mensagens para todos os clientes conectados.

## Arquivos

### `day068.js`

```js
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('Novo cliente conectado');

  socket.on('message', (message) => {
    console.log('Mensagem recebida:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
```